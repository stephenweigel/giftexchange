import { MatSnackBar } from '@angular/material/snack-bar';
import { GiftExchangeService } from '../../services/gift-exchange/gift-exchange.service';
import { Component, OnInit } from '@angular/core';
import { GiftExchangePairs } from 'src/app/interfaces/gift-exchange-pairs.interface';

@Component({
  selector: 'app-my-exchanges',
  templateUrl: './my-exchanges.component.html',
  styleUrls: ['./my-exchanges.component.scss']
})
export class MyExchangesComponent implements OnInit {
    public exchanges;

  constructor(private giftExchangeService: GiftExchangeService, private snackBar: MatSnackBar) { }

    async ngOnInit(): Promise<void> {
        this.exchanges = await this.giftExchangeService.getExchanges();
        this.exchanges.forEach(exchange => {
            exchange.participantList = JSON.parse(exchange.originalList).join(',');
            exchange.pairs = JSON.parse(exchange.pairs);
        });
    }

    async deleteExchange(id: string): Promise<void> {
        const temp = (this.exchanges as GiftExchangePairs[]).find(exchange => exchange.id === id);
        this.exchanges = this.exchanges.filter(exchange => exchange.id !== id);
        this.giftExchangeService.delete(temp.id)
            .then(() => {
                this.displayMessage(`${temp.displayName} has been deleted.`);
            })
            .catch(err => {
                this.displayMessage(`There was an error deleting ${temp.displayName}`);
                this.exchanges.push(temp);
            });
    }

    private displayMessage(message): void {
        this.snackBar.open(message, 'Dismiss', { duration: 2000 });
    }
}
