import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewExchangeComponent } from './pages/new-exchange/new-exchange.component';
import { MyExchangesComponent } from './pages/my-exchanges/my-exchanges.component';
import { AuthGuard } from './guards/auth.guard';
import { ExistingExchangeComponent } from './pages/existing-exchange/existing-exchange.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new',
        component: NewExchangeComponent
    },
    {
        path: 'exchange/list',
        component: MyExchangesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exchange/:exchangeId',
        component: ExistingExchangeComponent
    },
    {
        path: 'exchange',
        component: ExistingExchangeComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
