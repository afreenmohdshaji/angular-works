import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  transaction:any
  constructor(private service:ExpensesService){
    
  }
  ngOnInit(): void {
    this.service.getTransactionList().subscribe(data=>this.transaction=data)
    this.service.reloadRequired.subscribe(data=>this.ngOnInit())
  }
  destroyTransaction(id:any){
    this.service.deleteTransaction(id).subscribe(data=>{
      this.ngOnInit()
    })
  }
  editTransaction(id:any){
    this.service.dispatchTransactionId(id)
  }

}
