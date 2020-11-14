import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginstatus:BehaviorSubject<boolean>;

  constructor() { 
    this.loginstatus = new BehaviorSubject(this.isLogged());
  }

  save(token:string){
    sessionStorage.setItem('token',token);
    this.loginstatus.next(true);
  }

  get(){
    return sessionStorage.getItem('token');
  }

  clear(){
    sessionStorage.removeItem('token');
    this.loginstatus.next(false);
  }

  isLogged(){
    return !!sessionStorage.getItem('token');
  }

}
