import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isUserAuthenticated$: Observable<boolean> | boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isUserAuthenticated$ = this.authService.userAuthenticatedEmitter;
  }


}
