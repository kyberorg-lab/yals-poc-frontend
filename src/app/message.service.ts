import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {StubMessage} from './stubMessage';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8080/stub';

  constructor( private http: HttpClient) { }

  getStubMessage(): Observable<StubMessage> {
    return this.http.get<StubMessage>(this.apiUrl);
  }
}
