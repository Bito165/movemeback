import {UserInterest} from '../../shared/cards/user-interest';
import {PersonalInformation} from './personal-information';

export interface AccountSetup {
  personalInformation: PersonalInformation | undefined;
  userInterests: Array<UserInterest> | undefined;
}
