import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
  
    let isAdmin = false;
 
    if (isAdmin) {
      return true;
    }
    return false;
  }
  
}
