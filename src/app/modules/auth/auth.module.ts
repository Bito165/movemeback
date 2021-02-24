import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalInformationComponent } from './components/account-setup/personal-information/personal-information.component';
import { InterestsComponent } from './components/account-setup/interests/interests.component';
import { ConfirmationComponent } from './components/account-setup/confirmation/confirmation.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoginComponent, PersonalInformationComponent, InterestsComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AuthModule { }
