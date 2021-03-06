import { MatSnackBar } from '@angular/material/snack-bar';

import { GiftExchangeService } from '../../services/gift-exchange/gift-exchange.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-existing-exchange',
  templateUrl: './existing-exchange.component.html',
  styleUrls: ['./existing-exchange.component.scss']
})
export class ExistingExchangeComponent implements OnInit {
    exchangeId: string;
    displayName: string;
    shared: boolean;
    pairs: string[];

    constructor(
        private service: GiftExchangeService,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        const exchangeId = this.route.snapshot.paramMap.get('exchangeId');
        if (exchangeId) {
            this.exchangeId = exchangeId;
            this.service.getPairs(exchangeId)
                .then(({ pairs, displayName, shared }) => {
                    this.pairs = pairs;
                    this.displayName = displayName;
                    this.shared = shared;
                })
                .catch(err => {
                    /* TODO: Add Error Logging */
                    console.log('error: ', err);
                    this.snackBar.open('Exchange not found.', 'Dismiss');
                });
        }
    }

}
