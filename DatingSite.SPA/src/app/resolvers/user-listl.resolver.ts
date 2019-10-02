import { UserModel } from '../models/UserModel';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Route } from '@angular/compiler/src/core';
import { AlertifyService } from '../Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserListResolver implements Resolve<UserModel[]> {

    pageNumber = 1;
    pageSize = 6;

    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<UserModel[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Error during data download');
                this.router.navigate(['']);
                return of(null);
            })
        );
    }
}
