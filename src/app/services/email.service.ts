import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendContactMail(contactInfo: any): Observable<any> {
    const url = `${environment.apiUrl}`;
    return this.http.post(url, contactInfo);
  }
}
