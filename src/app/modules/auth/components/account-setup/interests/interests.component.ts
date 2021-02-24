import { Component, OnInit } from '@angular/core';
import {UserInterest} from '../../../../../../models/shared/cards/user-interest';
import {AccountSetupMock} from '../../../../../../assets/mock-data/auth/account-setup';
import {BadgeDetails} from '../../../../../../models/shared/form-elements/badge-details';
import {AuthPresentationService} from '../../../../../../services/business/auth/auth-presentation.service';
import {Store} from '@ngrx/store';
import {AccountSetup} from '../../../../../../models/auth/Account-Setup/account-setup';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {updateUserInterests} from '../../../../../../services/state/actions/account-setup.actions';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests!: UserInterest[];
  selectedInterests: Array<UserInterest> = [];
  selectedInterestBadges: BadgeDetails[] = [];
  selectedInterestManifest: string[] = [];
  stage = 1;
  accountSetupState$!: Observable<AccountSetup>;
  currentInterests: any[] = [];
  interestsTemp: Array<{interest: UserInterest}> = [];
  constructor(private presentation: AuthPresentationService,
              private store: Store< {accountSetup: AccountSetup}>,
              private router: Router) {
    this.presentation.setPresentationStateSetup(this.stage);
    this.accountSetupState$ = store.select('accountSetup');
  }

  ngOnInit(): void {
    this.getMockInterests();
  }

  getMockInterests(): void{
    this.interests = AccountSetupMock.interests;
    this.accountSetupState$.subscribe(
      res => {
        res.userInterests?.forEach(
          interest => {
            console.log(res.userInterests?.length);
            this.updateInterests(interest);
          }
        );
      }
    );
  }

  updateInterests(interest: any, i?: number): void{
    console.log(interest, this.selectedInterestManifest);
    this.selectedInterests = [];
    if (!this.selectedInterestManifest.includes(interest.name)){
      this.selectedInterestManifest.push(interest.name);
      this.selectedInterestBadges.push({text: interest.name});
      this.currentInterests.push(interest);
      this.updateState();
    }
  }

  removeInterest(i: number): void{
    this.selectedInterestManifest.splice(i, 1);
    this.selectedInterestBadges.splice(i, 1);
    this.currentInterests.splice(i, 1);
    this.updateState();
  }

  proceed(): void{
    this.router.navigate(['/account-setup/confirmation']).then();
  }

  return(): void{
    this.router.navigate(['/account-setup/personal-info']).then();
  }

  updateState(): void{
    this.selectedInterests = this.currentInterests.map( element => {
      return element;
    });
    this.store.dispatch(updateUserInterests({interests: this.selectedInterests}));
  }

}
