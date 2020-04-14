
import { GiftExchangeService } from '../services/gift-exchange.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent implements OnInit {
    exchangeId: string;
    pairs: string[];
    component: ExchangeListComponent;

    constructor(
        private service: GiftExchangeService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        const exchangeId = this.route.snapshot.paramMap.get('exchangeId');
        if (exchangeId) {
            this.exchangeId = exchangeId;
            this.service.getPairs(exchangeId)
                .then(({ pairs }) => this.pairs = pairs);
        }
    }

}
