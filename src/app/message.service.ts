import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {StubMessage} from './stubMessage';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = environment.apiRoot + '/stub';

  constructor( private http: HttpClient) { }

  getStubMessage(): Observable<StubMessage> {
    return this.http.get<StubMessage>(this.apiUrl);
  }
}
