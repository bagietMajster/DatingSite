import { Component, OnInit } from '@angular/core';
import { Pagination, PaginationResult } from '../models/pagination';
import { AuthService } from '../Services/auth.service';
import { UserService } from '../Services/user.service';
import { Route, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../Services/alertify.service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})

export class LikesComponent implements OnInit {

  users: UserModel[];
  pagination: Pagination;
  likesParam: string;

  constructor(private authService: AuthService,
              private userService: UserService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.users.result;
      this.pagination = data.users.pagination;
    });
    this.likesParam = 'UserLikes';
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
    .subscribe((res: PaginationResult<UserModel[]>) => {
     this.users = res.result;
     this.pagination = res.pagination;
   }, error => {
     this.alertify.error(error);
   });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }
}
