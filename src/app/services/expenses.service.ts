import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  baseUrl:string="http://127.0.0.1:8000/api/v2/transactions/"
  reloadRequired=new Subject()

  emitTransactionId= new Subject()

  constructor(private http:HttpClient) {

  }
  getTransactionList(){
    let authToken=this.getToken()
    let headers=authToken?new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(this.baseUrl,{headers})
  }
  retrieveTransactionDetail(id:number){
    let authToken=this.getToken()
    let headers=authToken?new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}${id}/`,{headers})
  }
  addTransaction(data:any){
    let authToken=this.getToken()
    let headers=authToken?new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.post(this.baseUrl,data,{headers}).pipe(tap(data=>this.reloadRequired.next(true)))
  }
  updateTransaction(id:number,data:any){
    let authToken=this.getToken()
    let headers=authToken?new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.put(`${this.baseUrl}${id}/`,data,{headers}).pipe(tap(data=>this.reloadRequired.next(true)))
  }
  deleteTransaction(id:any){
    let authToken=this.getToken()
    let headers=authToken?new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.delete(`${this.baseUrl}${id}/`,{headers})
  }

  signUp(data:any){
    return this.http.post("http://127.0.0.1:8000/api/v2/register/",data)
  }

  signIn(data:any){
    return this.http.post("http://127.0.0.1:8000/api/v2/token/",data)
  }

  dispatchTransactionId(id:any){
    this.emitTransactionId.next(id)
  }

  summary(){
    let authToken=this.getToken()
    let headers=authToken?new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}summary/`,{headers})
  }

  getToken(){
    return "token" in localStorage?localStorage.getItem("token"):undefined
  }

}
