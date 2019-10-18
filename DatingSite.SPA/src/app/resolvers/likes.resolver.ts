import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../Services/user.service';
import { AlertifyService } from '../Services/alertify.service';
import { UserModel } from '../models/UserModel';

@Injectable()
export class LikesResolver implements Resolve<UserModel[]> {

    pageNumber = 1;
    pageSize = 12;
    likesParam = 'UserLikes';

    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<UserModel[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(
            catchError(error => {
                this.alertify.error('Problem z pobraniem danych');
                this.router.navigate(['']);
                return of(null);
            })
        );
    }
}
