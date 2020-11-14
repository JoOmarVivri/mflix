import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/gobals/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(
    private auth:AuthService,
    private router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLogged()) {
      this.router.navigate(['/']);
      return false;
    }
    
    return true;
  }
  
}
