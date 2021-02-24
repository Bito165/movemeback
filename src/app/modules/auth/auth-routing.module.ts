import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import {PersonalInformationComponent} from './components/account-setup/personal-information/personal-information.component';
import {InterestsComponent} from './components/account-setup/interests/interests.component';
import {ConfirmationComponent} from './components/account-setup/confirmation/confirmation.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: '', redirectTo: 'account-setup/personal-info'},
    {path: 'account-setup', redirectTo: 'account-setup/personal-info'},
    {path: 'login', component: LoginComponent},
    {path: 'account-setup/personal-info', component: PersonalInformationComponent},
    {path: 'account-setup/interests', component: InterestsComponent},
    {path: 'account-setup/confirmation', component: ConfirmationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
