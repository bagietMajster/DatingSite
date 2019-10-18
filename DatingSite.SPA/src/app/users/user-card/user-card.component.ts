import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserModel;

  constructor(private authService: AuthService, private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id)
          .subscribe(data => {
            this.alertify.success('You liked: ' + this.user.userName);
          }, error => {
            this.alertify.error('Alredy liked!');
          });
  }

}
