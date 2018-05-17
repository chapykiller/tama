import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PetModule } from "../pet/pet.module";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbModule,
    FormsModule,
    PetModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent]
})
export class UsersModule { }
