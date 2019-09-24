import { UserModel } from '../models/UserModel';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Route } from '@angular/compiler/src/core';
import { AlertifyService } from '../Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class UserEditResolver implements Resolve<UserModel> {

    constructor(private userService: UserService, private router: Router,
                private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Error during data download');
                this.router.navigate(['/users']);
                return of(null);
            })
        );
    }
}
