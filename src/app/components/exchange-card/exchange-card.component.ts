import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GiftExchangePairs } from 'src/app/interfaces/gift-exchange-pairs.interface';

@Component({
  selector: 'app-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.scss']
})
export class ExchangeCardComponent implements OnInit {
    @Input() exchange: GiftExchangePairs;
    @Output() deleteExchange: EventEmitter<string> = new EventEmitter();

  constructor() { }


    ngOnInit(): void {
    }


}
