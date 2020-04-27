import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(
        public auth: AuthService,
        private breakpointObserver: BreakpointObserver
    ) {}
}
