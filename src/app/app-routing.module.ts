import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"transaction/:id",component:TransactionDetailComponent},
  {path:"",component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
