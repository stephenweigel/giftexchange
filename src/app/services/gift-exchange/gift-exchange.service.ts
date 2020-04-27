import { AuthService } from '../auth/auth.service';
import { createPairedList } from '../../common/create-paired-list';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { GiftExchangePairs, GiftExchangePairsJSON } from '../../interfaces/gift-exchange-pairs.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StorePairsResponse } from 'src/app/interfaces/store-pairs-response.interface';


@Injectable({
    providedIn: 'root'
})
export class GiftExchangeService {

    constructor(private afs: AngularFirestore, private authService: AuthService) { }

    buildPairs(list: string[]): string[] {
        const { pairs } = createPairedList(list);
        return pairs;
    }

    save(data: GiftExchangePairs, auth: AuthService = this.authService): Promise<StorePairsResponse> {
        return new Promise((resolve, reject) => {
            auth.user$.subscribe(user => {
                if (!user) { return reject(new Error('Must be logged in to save')); }

                const { originalList, pairs, displayName } = data;
                try {
                    const newGiftExchangeRecord: GiftExchangePairsJSON = {
                        originalList: JSON.stringify(originalList),
                        pairs: JSON.stringify(pairs),
                        displayName,
                        uid: user.uid,
                        shared: false
                    };

                    this.afs.collection('gift-exchange').add(newGiftExchangeRecord)
                        .then(res => resolve({ id: res.id, pairs }))
                        .catch(err => reject(err));
                } catch (err) {
                    return reject(err);
                }
            });
        });
    }

    getPairs(id: string, auth: AuthService = this.authService): Promise<GiftExchangePairs> {
        return new Promise((resolve, reject) => {
            auth.user$.subscribe(user => {
                this.afs.collection('gift-exchange')
                .doc(id)
                .get()
                .subscribe(doc => {
                    const { pairs, originalList, shared, displayName } = doc.data();
                    const processedData: GiftExchangePairs = {
                        id,
                        shared,
                        pairs: JSON.parse(pairs),
                        originalList: JSON.parse(originalList),
                        displayName
                    };
                    return resolve(processedData);
                },
                err => reject(err));
            });

        });
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.afs.collection('gift-exchange')
                .doc(id)
                .delete()
                .then(() => resolve(true))
                .catch(err => reject(err));
        });
    }

    getExchanges(): Promise<GiftExchangePairs> {
        return new Promise((resolve, reject) => {
            this.authService.user$.subscribe(user => {
                const exchanges: Observable<any> = this.afs.collection('gift-exchange', ref => ref.where('uid', '==', user.uid))
                    .snapshotChanges().pipe(map(actions => {
                        return actions.map(a => {
                            const data = a.payload.doc.data() as GiftExchangePairs;
                            const id = a.payload.doc.id;
                            return { id, ...data };
                        });
                    }));
                exchanges.subscribe(data => resolve(data), err => reject(err));
            });
        });
    }
}
