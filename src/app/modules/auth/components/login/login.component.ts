import { Component, OnInit } from '@angular/core';
import {InputDetails} from 'src/models/shared/form-elements/input-details';
import {Login} from 'src/assets/mock-data/auth/login';
import { ButtonDetails } from 'src/models/shared/button/button-details';
import {AuthPresentationService} from '../../../../../services/business/auth/auth-presentation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputFields: Array<InputDetails> = [];
  userDetails: {email: string, password: string} = {email: '', password: ''};
  buttonDetails: ButtonDetails = { text: 'Login', color: 1, customStyle: 'p-3', type: 'submit'};
  constructor(private presentation: AuthPresentationService) {
    this.presentation.setPresentationStateLogin();
  }

  ngOnInit(): void {
    this.getInputFields();
  }

  getInputFields(): void{
    this.inputFields = Login.loginFields;
  }

  loginUser(form: any): void{
    console.log(form.value);
  }

}
