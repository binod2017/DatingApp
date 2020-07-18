import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/users.service';
import { AlertifyService } from '../services/Alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid[0]).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving your profile');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
