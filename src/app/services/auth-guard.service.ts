import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } else {
          console.log("L'utilisateur n'est pas connecté");
          this.router.navigate(['/sign-in']);
          resolve(false);
        }
      });
    });
  }

}