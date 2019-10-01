import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AlertifyService } from '../Services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-green',
    },
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      confirmPassword: ['', Validators.required],
      gender: ['male'],
      dateOfBirth: [null, Validators.required],
      zodiacSign: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    }, { validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(fg: FormControl) {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : { mismatch: true };
  }
  register() {
    // this.authService.register(this.model).subscribe(() => {
    //  this.alertify.success('Registred!');
    // }, error => {
    //  this.alertify.error(error);
    // });
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
