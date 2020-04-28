import { MatSnackBar } from '@angular/material/snack-bar';
import { GiftExchangeService } from './../../services/gift-exchange/gift-exchange.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GiftExchangePairs } from 'src/app/interfaces/gift-exchange-pairs.interface';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.scss']
})
export class ExchangeCardComponent implements OnInit {
    @Input() exchange: GiftExchangePairs;
    @Output() deleteExchange: EventEmitter<string> = new EventEmitter();
    @ViewChild('sharedToggle') sharedToggle: MatSlideToggle;


    constructor(
        private giftExchangeService: GiftExchangeService,
        private matSnackBar: MatSnackBar,
        private clipboard: Clipboard) { }


    ngOnInit(): void {
    }

    copyExchangeUrl(): void {
        const exchangeUrl = `${environment.baseUrl}/exchanges/${this.exchange.id}`;
        this.clipboard.copy(exchangeUrl);
        this.matSnackBar.open('Copied URL to clipboard.', 'Dismiss', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }


    toggleShared(): void {
        this.giftExchangeService.toggleShared(this.exchange.id, this.exchange.shared)
            .then(newSharedStatus => this.exchange.shared = newSharedStatus)
            .catch((err) => {
               // TODO: Handle Error;
                this.matSnackBar.open('There was an error updating your exchange.', 'Dismiss', {
                    duration: 3000,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
                // The mat-slide-toggle requires a manual toggling
                // to get back to the previous state.
                this.sharedToggle.toggle();
            });
    }

    get toggleChecked(): boolean {
        return this.exchange.shared;
    }
}
