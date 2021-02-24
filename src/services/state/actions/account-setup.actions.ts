import {createAction, props} from '@ngrx/store';
import {PersonalInformation} from '../../../models/auth/Account-Setup/personal-information';
import {UserInterest} from '../../../models/shared/cards/user-interest';

export const updatePersonalInformation = createAction('[PersonalInformation Component] UpdatePersonalInfo',
  props<{ personalInfo: PersonalInformation}>());
export const updateUserInterests = createAction('[Interests Component] UpdateUserInterests',
  props<{interests: UserInterest[]}>());
