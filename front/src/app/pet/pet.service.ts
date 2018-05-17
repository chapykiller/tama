import { Injectable, Inject } from '@angular/core';
import { RestService } from "../rest-service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {  } from "rxjs/operators";

export interface PetDetails {
  _id: string,
  name: string;
  type: 'dog' | 'cat';
  age: number;
  hunger: number;
}

@Injectable({
  providedIn: 'root'
})
export class PetService extends RestService {

  relativeUrl = '/pet';

  constructor(@Inject(HttpClient) http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl + this.relativeUrl;
  }

  public createPet(pet: PetDetails): Observable<any> {
    return this.post('/', pet, true);
  }

  public feedPet(pet: PetDetails): Observable<any> {
    return this.put('/', {id: pet._id}, true);
  }

  public getPetList(): Observable<any> {
    return this.get('/', true);
  }

  public deletePet(pet: PetDetails): Observable<any> {
    return this.delete(`/${pet._id}`, true);
  }
}
