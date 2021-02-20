import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, AccountSetupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
