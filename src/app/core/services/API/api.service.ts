import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:5028/api";

  constructor(private http: HttpClient) {}

  // reset password
  resetPassword(request: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/Authentication/reset-password-link`, request, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  // register a new user
  registerUser(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Authentication/register`, request, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Authentication/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
