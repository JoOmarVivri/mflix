import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signup(user){
    const url= `${environment.apiUrl}signup`;
    return this.http.post(url,user).toPromise();
  }

}
