import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardservicesService } from '../Services/authservices/authguardservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private Authservice:AuthguardservicesService, private router: Router) { }
  canActivate(): boolean {
    if (!this.Authservice.gettoken()) {
      this.router.navigateByUrl("/login");
    }
    return this.Authservice.gettoken();
  }
  
}
