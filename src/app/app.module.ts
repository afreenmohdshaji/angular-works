import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactioncreateComponent } from './transactioncreate/transactioncreate.component';
import { HomeComponent } from './home/home.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    TransactioncreateComponent,
    HomeComponent,
    SummaryComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
