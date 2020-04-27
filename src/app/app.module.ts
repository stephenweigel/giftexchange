import { ExistingExchangeComponent } from './pages/existing-exchange/existing-exchange.component';
import { GiftExchangeService } from './services/gift-exchange/gift-exchange.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewExchangeFormComponent } from './components/new-exchange-form/new-exchange-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ExistingExchangeFormComponent } from './components/existing-exchange-form/existing-exchange-form.component';
import { CopyCurrentUrlButtonComponent } from './components/copy-current-url-button/copy-current-url-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Overlay } from '@angular/cdk/overlay';
import { NewExchangeComponent } from './pages/new-exchange/new-exchange.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MyExchangesComponent } from './pages/my-exchanges/my-exchanges.component';
import { ExchangeCardComponent } from './components/exchange-card/exchange-card.component';
import { ExchangeTableComponent } from './components/exchange-table/exchange-table.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchExchangesComponent } from './pages/search-exchanges/search-exchanges.component';


@NgModule({
  declarations: [
    AppComponent,
    NewExchangeFormComponent,
    ExistingExchangeComponent,
    HomeComponent,
    ExistingExchangeFormComponent,
    CopyCurrentUrlButtonComponent,
    NewExchangeComponent,
    MyExchangesComponent,
    ExchangeCardComponent,
    ExchangeTableComponent,
    NavigationComponent,
    SearchExchangesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    GiftExchangeService,
    MatSnackBar,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
