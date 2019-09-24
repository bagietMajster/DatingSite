import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UserModel;
  @ViewChild('editForm') editForm: NgForm;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateUser() {
    this.alertify.success('Profile saved');
    this.editForm.reset(this.user);
  }
}
