import { RouterModule, Routes } from '@angular/router';
import { GiftExchangeService } from './services/gift-exchange.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewExchangeFormComponent } from './new-exchange-form/new-exchange-form.component';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';
import { HomeComponent } from './home/home.component';
import { ExistingExchangeFormComponent } from './existing-exchange-form/existing-exchange-form.component';
import { NavComponent } from './nav/nav.component';
import { CopyCurrentUrlButtonComponent } from './copy-current-url-button/copy-current-url-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { NewExchangeComponent } from './new-exchange/new-exchange.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new',
        component: NewExchangeComponent
    },
    {
        path: 'existing/:exchangeId',
        component: ExchangeListComponent
    },
    {
        path: 'existing',
        component: ExchangeListComponent
    }
];



@NgModule({
  declarations: [
    AppComponent,
    NewExchangeFormComponent,
    ExchangeListComponent,
    HomeComponent,
    ExistingExchangeFormComponent,
    NavComponent,
    CopyCurrentUrlButtonComponent,
    NewExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule
  ],
  providers: [
    GiftExchangeService,
    MatSnackBar,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
