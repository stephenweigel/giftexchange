import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-new-exchange',
  templateUrl: './new-exchange.component.html',
  styleUrls: ['./new-exchange.component.scss']
})
export class NewExchangeComponent implements OnInit {
    pairs: string[];
    user: User;

    constructor(private router: Router,  private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => this.user = user);
    }

    clearPairs(): void {
        this.pairs = undefined;
    }

    displayPairs(pairs) {
        this.pairs = pairs;
    }

    redirectToExchange(id) {
        this.router.navigate([`/exchanges/${id}`]);
    }

}
