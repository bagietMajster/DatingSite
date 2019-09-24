import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.user;
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: UserModel[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
}
