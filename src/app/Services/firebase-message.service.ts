// import { AngularFirestore } from '@angulae/fire/compat/firestore';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Message } from '../../models';
// import { Database } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseMessageService {
isLoggedIn=false;
subscription: Subscription[] = [];
private  messagesSource = new BehaviorSubject<any>([]);
messagesSource$ = this.messagesSource.asObservable();

 url='https://message-management-system-default-rtdb.firebaseio.com/messages.json';
  constructor(
    private http:HttpClient,
    // public db:Database
    ) { }


  addMessage(data:Message): Observable<any>{
    return this.http.post(this.url,data)
  }
  getMessagesSource(data:any){
    this.messagesSource.next(data)
  }

  getMessages(){
   return  this.http.get<Message>(this.url).pipe(
    map((resData:any)=>{  const msgArray=[];
for (const key in resData){
msgArray.push({id:key,...resData[key]})
}
return msgArray ;
    }))

  }


}
