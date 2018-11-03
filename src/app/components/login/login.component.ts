import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  invalidCredentials: Boolean = false;
  showValidationMessages: Boolean = false;
  constructor(private api: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.api.loginUser(formValues.email, formValues.password)
      .subscribe(
        (data) => {
          const stateUser = {
            token : data['access_token'],
            username : formValues.email
          };
          this.api.saveUser(stateUser);
          this.router.navigate(['']);
          this.invalidCredentials = false;
        },
        (error) => this.invalidCredentials = true,
      );
  }
}
