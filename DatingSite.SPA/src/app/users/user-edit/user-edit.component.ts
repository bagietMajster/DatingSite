import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UserModel;
  @ViewChild('editForm', null) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotfication($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
              private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
    .subscribe(next => {
      this.alertify.success('Profile saved');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }
}
