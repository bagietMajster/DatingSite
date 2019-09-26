import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jwtHelper = new JwtHelperService();

  constructor(private authServices: AuthService) {

  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authServices.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authServices.currentUser = user;
      this.authServices.changeUserPhoto(user.photoUrl);
    }
  }
}
