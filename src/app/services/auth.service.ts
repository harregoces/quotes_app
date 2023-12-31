import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(data: any) {
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }

  logout() {
    //return this.http.get('/logout', {});
  }

  register(data: any) {
    let responseBody = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation
    }
    return this.http.post(this.apiUrl +  '/register', responseBody);
  }

}
