import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this._isLoggedIn.asObservable();
  private _backendUrl = 'http://localhost:3000/api/protected-route/';

  constructor(private http: HttpClient, private router: Router) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(body: any) {
    return this.http.post<{ token: string }>(this._backendUrl + "login", body)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        this._isLoggedIn.next(true);
      }));
  }

  signup(body: any) {
    return this.http.post<{ token: string }>(this._backendUrl + "signup", body)
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        this._isLoggedIn.next(true);
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
