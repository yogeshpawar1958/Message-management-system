import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../../models';
@Injectable({
  providedIn: 'root',
})
export class FirebaseMessageService {
  isLoggedIn = false;

  url =
    'https://message-management-system-default-rtdb.firebaseio.com/messages.json';
  constructor(private http: HttpClient) {}

  addMessage(data: Message): Observable<any> {
    return this.http.post(this.url, data);
  }

  getMessages() {
    return this.http.get<Message>(this.url).pipe(
      map((resData: any) => {
        const msgArray = [];
        for (const key in resData) {
          msgArray.push({ id: key, ...resData[key] });
        }
        return msgArray;
      })
    );
  }
}
