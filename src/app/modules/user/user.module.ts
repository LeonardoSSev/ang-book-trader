import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    ProfileComponent,
    MyBooksComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
