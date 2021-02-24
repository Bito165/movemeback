import { Component, OnInit } from '@angular/core';
import {ButtonDetails} from '../../../../../../models/shared/button/button-details';
import {AuthPresentationService} from '../../../../../../services/business/auth/auth-presentation.service';
import {Store} from '@ngrx/store';
import {AccountSetup} from '../../../../../../models/auth/Account-Setup/account-setup';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PersonalInformation} from '../../../../../../models/auth/Account-Setup/personal-information';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  buttonDetails: ButtonDetails = { text: 'Proceed', color: 1, customStyle: 'p-3'};
  stage = 2;
  userDetails: PersonalInformation | undefined;
  accountSetupState$: Observable<AccountSetup>;
  constructor(private presentation: AuthPresentationService,
              private store: Store< {accountSetup: AccountSetup}>,
              private router: Router) {
    this.presentation.setPresentationStateSetup(this.stage);
    this.accountSetupState$ = store.select('accountSetup');
  }

  ngOnInit(): void {
    this.accountSetupState$.subscribe(
      res => {
        this.userDetails = res.personalInformation;
      }
    );
  }



}
