import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-transactioncreate',
  templateUrl: './transactioncreate.component.html',
  styleUrls: ['./transactioncreate.component.css']
})
export class TransactioncreateComponent implements OnInit{
  isEdit:boolean=false
  instanceId:any
  title:string="Add Transaction"

  categories=['food','fuel','entertainment','bills','rent',"emi",'miscellaneous']
  constructor(private service:ExpensesService){

  }
  transactionForm=new FormGroup({
    "title":new FormControl("",Validators.required),
    "type":new FormControl("",Validators.required),
    "category":new FormControl("",Validators.required),
    "amount":new FormControl("",Validators.required),
  })

  addTransaction(){
    if(this.isEdit){
      let data=this.transactionForm.value
      this.service.updateTransaction(this.instanceId,data).subscribe(data=>console.log(data))
      this.transactionForm.reset()
      this.isEdit=false
    }
    else{
      let data=this.transactionForm.value
      this.service.addTransaction(data).subscribe(data=>console.log(data))
      this.transactionForm.reset()
    }
  
    
  }
  ngOnInit(){
    this.service.emitTransactionId.subscribe((id:any)=>{
      this.isEdit=true
      this.title="Edit Transaction"
      this.instanceId=id
      this.service.retrieveTransactionDetail(id).subscribe(data=>this.transactionForm.patchValue(data))
    })
  }
  

}
