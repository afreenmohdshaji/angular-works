import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit{

  id:any
  transactionDetail:any
  constructor(private route:ActivatedRoute,private service:ExpensesService){
    this.id=this.route.snapshot.params["id"]
    
  }
  ngOnInit(){
    this.service.retrieveTransactionDetail(this.id).subscribe(data=>this.transactionDetail=data)
  }

}
