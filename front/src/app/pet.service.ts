import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface PetDetails {
  _id: string;
  name: string;
  age: number;
  hunger: number;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiServer;

  constructor(private auth: AuthenticationService, private http: HttpClient) {
    this.apiServer = 'http://localhost:3000';
  }

  private request(method: 'post' | 'put' | 'get' | 'delete', pet?: PetDetails): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`${this.apiServer}/pet`, pet, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
    } else if (method === 'put') {
      base = this.http.put(`${this.apiServer}/pet`, pet, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
    } else if(method === 'get') {
      base = this.http.get(`${this.apiServer}/pet`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
    } else {
      base = this.http.delete(`${this.apiServer}/pet`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
    }

    const request = base.pipe(
      map((data: PetDetails) => {
        return data;
      })
    );

    return request;
  }

  public create(pet: PetDetails): Observable<any> {
    return;
  }

  public feed(pet: PetDetails): Observable<any> {
    return;
  }

  public list(): Observable<any> {
    return;
  }

  public delete(pet: PetDetails): Observable<any> {
    return;
  }
}
