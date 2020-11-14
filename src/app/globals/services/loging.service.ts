import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";



@Injectable({
  providedIn: 'root'
})
export class LogingService {

  constructor( private http:HttpClient ) { }

  login(credentiasl):Promise<any>{  
    const url = environment.apiUrl + 'auth' ;

    return this.http.post(url,credentiasl).toPromise();
  }
  
}

interface Token {
  token:string
}
