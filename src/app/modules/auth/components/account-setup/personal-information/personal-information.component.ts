import { Component, OnInit } from '@angular/core';
import {InputDetails} from '../../../../../../models/shared/form-elements/input-details';
import {AccountSetupMock} from '../../../../../../assets/mock-data/auth/account-setup';
import {ButtonDetails} from '../../../../../../models/shared/button/button-details';
import {AuthPresentationService} from '../../../../../../services/business/auth/auth-presentation.service';
import {AccountSetup} from 'src/models/auth/Account-Setup/account-setup';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {updatePersonalInformation} from '../../../../../../services/state/actions/account-setup.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  personalInformationFields!: InputDetails [];
  buttonDetails: ButtonDetails = { text: 'Proceed', color: 1, customStyle: 'p-3'};
  stage = 0;
  accountSetupState$!: Observable<AccountSetup>;
  // @ts-ignore
  accountSetupInformation: AccountSetup;
  constructor(private presentation: AuthPresentationService,
              private store: Store< {accountSetup: AccountSetup}>,
              private router: Router) {
    this.presentation.setPresentationStateSetup(this.stage);
    this.accountSetupState$ = store.select('accountSetup');
  }

  ngOnInit(): void {
    this.getInformationFields();
    this.accountSetupState$.subscribe(
      res => {
        this.personalInformationFields[0].value = res.personalInformation?.firstName;
        this.personalInformationFields[1].value = res.personalInformation?.lastName;
        this.personalInformationFields[2].value = res.personalInformation?.email;
        this.personalInformationFields[3].value = res.personalInformation?.password;
      }
    );
  }

  getInformationFields(): void{
    this.personalInformationFields = AccountSetupMock.personalInformation;
  }

  submitPersonalInformation(form: any): void{
    this.store.dispatch(updatePersonalInformation({personalInfo: form.value}));
    form.reset();
    this.router.navigate(['/account-setup/interests']).then();
  }

}
