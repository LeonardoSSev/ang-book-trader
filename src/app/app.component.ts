import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isUserAuthenticated: boolean = false;

  subscriber: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscriber = this.authService.userAuthenticatedEmitter
    .subscribe( isUserAuthenticated => this.isUserAuthenticated = isUserAuthenticated);
  }

  doLogout() {
    this.authService.doLogout();
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
