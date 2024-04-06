import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import {Chart,registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{

  totalExpense:any
  totalIncome:any
  summary:any
  chart:any

  constructor(private service:ExpensesService){
    
  }
  ngOnInit(){
    Chart.register(...registerables)
    this.service.summary().subscribe((data:any)=>{
      this.totalExpense=data.total_expense
      this.totalIncome=data.total_income
      this.summary=data.category_summary
      this.displayChart(this.summary)
    }
    )
    this.service.reloadRequired.subscribe(data=>this.ngOnInit())
  }
  displayChart(summary:any){
    if(this.chart){
      this.chart.destroy()
    }
    let ctx:any = document.getElementById('mychart');

    this.chart= new Chart(ctx, {
      type: 'pie',
      data: {
        labels: summary.map((item:any)=>item.category) ,
        datasets: [{
          label: 'amount',
          data: summary.map((item:any)=>item.total),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
