import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  constructor(private userService: UserService, private router: Router) {
    userService.loggedInObservable.subscribe(res => {
      this.loggedIn = res;
      if (this.loggedIn) {
        this.username = JSON.parse(localStorage.getItem('user')).username;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['/']);
  }
}
