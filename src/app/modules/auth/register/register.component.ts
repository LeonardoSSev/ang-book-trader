import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  verifyIfFormIsValid() {
    return !this.registerForm.valid
  }

  doRegister() {
    let user = new User();

    user.name = this.registerForm.value.name;
    user.email = this.registerForm.value.email;
    user.password = this.registerForm.value.password;

    this.authService.doRegister(user);
  }

}
