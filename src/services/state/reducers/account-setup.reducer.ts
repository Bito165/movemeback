import {Action, createReducer, on} from '@ngrx/store';
import * as AccountSetupUpdate from '../actions/account-setup.actions';
import {AccountSetup} from '../../../models/auth/Account-Setup/account-setup';

export const initialState: AccountSetup = {
  personalInformation: {
    firstName : '',
    lastName: '',
    email: '',
    password: ''
  },
  userInterests: []
};

const accountSetup = createReducer(
  initialState,
  on(AccountSetupUpdate.updatePersonalInformation, (state, { personalInfo }) =>
    ({
      ...state, personalInformation: personalInfo
    }),
  ),
  on(AccountSetupUpdate.updateUserInterests, (state, { interests }) =>
    ({
      ...state, userInterests: interests
    }))
);

// tslint:disable-next-line:typedef
export function accountSetupReducer(state: AccountSetup | undefined, action: Action) {
  // @ts-ignore
  return accountSetup(state, action);

}
