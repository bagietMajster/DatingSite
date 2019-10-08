import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginationResult } from 'src/app/models/pagination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserModel[];
  user: UserModel =  JSON.parse(localStorage.getItem('user'));
  genderList = [{value: 'male', display: 'Male'},
                {value: 'female', display: 'Female'}];
  zodiacSignList = [{value: 'All', display: 'All'},
      {value: 'aries', display: 'Aries'},
      {value: 'Taurus', display: 'Taurus'},
      {value: 'Gemini', display: 'Gemini'},
      {value: 'Cancer', display: 'Cancer'},
      {value: 'leo', display: 'Leo'},
      {value: 'Virgo', display: 'Virgo'},
      {value: 'Libra', display: 'Libra'},
      {value: 'Scorpio', display: 'Scorpio'},
      {value: 'Sagittarius', display: 'Sagittarius'},
      {value: 'Capricorn', display: 'Capricorn'},
      {value: 'Aquarius', display: 'Aquarius'},
      {value: 'Pisces', display: 'Pisces'}];
  userParams: any = {};
  pagination: Pagination;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.user.result;
      this.pagination = data.user.pagination;
    });
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.zodiacSign = 'All';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 100;
    this.userParams.orderBy = 'lastActive';
  }

  resetFilters() {
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.zodiacSign = 'All';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 100;
    this.userParams.orderBy = 'lastActive';
    this.loadUsers();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
    .subscribe((res: PaginationResult<UserModel[]>) => {
      this.users = res.result;
    }, error => {
      this.alertify.error(error);
    });
  }
}
