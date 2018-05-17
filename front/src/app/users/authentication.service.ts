import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { RestService } from "../rest-service";

export interface UserDetails {
  _id: string;
  username: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  username: string;
  password: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends RestService implements CanActivate {

  relativeUrl = '/users';

  constructor(@Inject(HttpClient) http: HttpClient, private router: Router) { 
    super(http);
    this.baseUrl = this.baseUrl + this.relativeUrl;
   }

  canActivate() {
    if(!this.isLoggedIn()) {
      this.router.navigateByUrl(`${this.relativeUrl}/login`);
      return false;
    }
    return true;
  }

  public logout(): void {
    this.deleteToken();
    this.router.navigateByUrl(`${this.relativeUrl}/login`);
  }

  public getUserDetails(): UserDetails {
    const token = this.token;
    if(token) {
      let payload = token.split('.')[1];
      payload = window.atob(payload);

      return JSON.parse(payload);
    }
    else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if(user) {
      return user.exp > Date.now() / 1000;
    }
    else {
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.post('/register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.post('/login', user).pipe(map(
      (data: TokenResponse) => {
        if(data.token) {
          this.saveToken(data.token);
        }
        return data;
      }
    ));
  }

  public profile(): Observable<any> {
    return this.get('/profile', true);
  }
}
