import { AuthService } from '../../services/auth/auth.service';
import { GiftExchangeService } from '../../services/gift-exchange/gift-exchange.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { User } from 'client/app/interfaces/user.interface';

@Component({
  selector: 'app-new-exchange-form',
  templateUrl: './new-exchange-form.component.html',
  styleUrls: ['./new-exchange-form.component.scss']
})
export class NewExchangeFormComponent implements OnInit {
    form;
    user: User;
    @Output() pairsGenerated: EventEmitter<any> = new EventEmitter();
    @Output() pairsSaved: EventEmitter<any> = new EventEmitter();

    constructor(
        private giftExchangeService: GiftExchangeService,
        private authService: AuthService
    ){
        this.form = new FormGroup({
            displayName: new FormControl(''),
            names: new FormArray([])
        });
    }

    ngOnInit() {
        this.authService.user$.subscribe(user => this.user = user);
    }


    addName(name: HTMLInputElement): void {
        if (!name.value) { return; }
        if ((this.names.value as string[]).indexOf(name.value) !== -1) { return; }

        this.names.push(new FormControl(name.value));
        name.value = '';
    }

    removeName(name: FormControl): void {
        const index = this.names.controls.indexOf(name);
        this.names.removeAt(index);
    }

    async processForm(event): Promise<void> {
        event.preventDefault();

        const names = this.names.value;
        const pairs = this.giftExchangeService.buildPairs(names);


        if (!this.user) { return this.pairsGenerated.emit(pairs); }

        this.giftExchangeService.save({
            originalList: names,
            pairs,
            shared: false,
            displayName: this.displayName.value,
            uid: this.user.uid
        })
        .then(({ id }) => this.pairsSaved.emit(id))
        .catch(err => { /* TODO: Add Error Logging */});
    }

    get names() {
        return (this.form.get('names') as FormArray);
    }

    get displayName() {

        return this.form.get('displayName');
    }

    get validNames() {
        if (this.names.length === 0) { return false; }
        return this.names.length % 2 === 0 ? true : false;
    }

}
