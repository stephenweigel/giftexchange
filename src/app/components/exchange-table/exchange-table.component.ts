import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.scss']
})
export class ExchangeTableComponent implements OnInit {
    @Input() pairs;

  constructor() { }

  ngOnInit(): void {
  }

}
