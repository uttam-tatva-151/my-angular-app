import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:5028/api";

  constructor(private http: HttpClient) {}

  // Example: register a new user
  registerUser(request: any) {
    return this.http.post(`${this.baseUrl}/Authentication/register`, request, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Example: login
  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/authentication/login`, credentials);
  }

}
