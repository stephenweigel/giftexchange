import { GiftExchangeService } from '../services/gift-exchange.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-exchange-form',
  templateUrl: './new-exchange-form.component.html',
  styleUrls: ['./new-exchange-form.component.scss']
})
export class NewExchangeFormComponent {
    form;
    @Output() pairsGenerated: EventEmitter<any> = new EventEmitter();

    constructor(private service: GiftExchangeService, private router: Router) {
        this.form = new FormGroup({
            names: new FormArray([])
        });
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

    getPairs(event): void {
        event.preventDefault();
        this.service.createPairs(this.names.value)
            .then(({ id }) => this.router.navigate([`/existing/${id}`]))
            .catch(err => console.log(err));
    }

    get names() {
        return (this.form.get('names') as FormArray);
    }

    get validNames() {
        if (this.names.length === 0) { return false; }
        return this.names.length % 2 === 0 ? true : false;
    }

}
