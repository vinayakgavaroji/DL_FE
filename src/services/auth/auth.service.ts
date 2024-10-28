import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();
  private _backendUrl = 'http://localhost:3000/api/protected-route/';
  tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.tokenKey);
    this._isLoggedIn.next(!!token);
  }

  login(body: any) {
    return this.http.post<{ token: string }>(this._backendUrl + "login", body)
      .pipe(tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        this._isLoggedIn.next(true);
      }));
  }

  signup(body: any) {
    return this.http.post<{ token: string }>(this._backendUrl + "signup", body)
      .pipe(tap(res => {
        console.log(res)
        localStorage.setItem(this.tokenKey, res.token);
        this._isLoggedIn.next(true);
      }));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
