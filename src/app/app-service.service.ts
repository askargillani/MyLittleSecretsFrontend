import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public headers: HttpHeaders = new HttpHeaders();
  public httpOptions: any;
  constructor(
      protected http: HttpClient
    ) {
  }

  public get reqheaders() {
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      },
    );

    this.httpOptions = {
      headers: this.headers
    };
    return this.httpOptions;
  }

  signup(email: any, password: any): Observable<any> {
    let payload = {
      "email": email,
      "password": password
    }
    let req = 'http://localhost:3000/signup';
    console.log(req);
    return this.http.post(req,payload, this.reqheaders);
  }
}
