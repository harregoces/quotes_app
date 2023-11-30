import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private currentUser: User | null = null;
  private token: string | null = null;

  constructor() {}

  setUserSession(user: User, token: string) {
    this.currentUser = user;
    this.token = token;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  getUserSession(): { user: User | null, token: string | null } {
    const userData = localStorage.getItem('user');
    const tokenData = localStorage.getItem('token');
    if (userData && tokenData) {
      this.currentUser = new User(JSON.parse(userData));
      this.token = tokenData;
    }
    return { user: this.currentUser, token: this.token };
  }

  clearSession() {
    this.currentUser = null;
    this.token = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
