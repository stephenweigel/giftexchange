import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-exchange-form',
  templateUrl: './existing-exchange-form.component.html',
  styleUrls: ['./existing-exchange-form.component.scss']
})
export class ExistingExchangeFormComponent {
    form;

    constructor(private router: Router) {
        this.form = new FormGroup({
            exchangeId: new FormControl('', [Validators.required])
        });
    }

    findExchange(): void {
        if (this.exchangeId.errors !== null) { return; }
        this.router.navigate([`/exchange/${this.exchangeId.value}`]);
        this.exchangeId.setValue('');
    }

    get exchangeId() {
        return this.form.get('exchangeId') as FormControl;
    }

}
