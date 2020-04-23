

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user$: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    // Logged In
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    // Logged Out
                    return of(null);
                }
            })
        );
    }

    async googleSignIn() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
    }

    async signOut() {
        await this.afAuth.signOut();
        this.router.navigate(['/']);
    }

    private updateUserData(user) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
        };

        return userRef.set(data, { merge: true });
    }
}
