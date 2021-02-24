import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { accountSetupReducer } from './reducers/account-setup.reducer';
import { rehydrateMetaReducer } from './reducers/metaReducer.reducer';
import {AccountSetup} from '../../models/auth/Account-Setup/account-setup';

export interface RootState {
  accountSetup: AccountSetup;
};

export const reducers: ActionReducerMap<RootState> = {
  accountSetup: accountSetupReducer
};

export const metaReducers: MetaReducer[] = [
  rehydrateMetaReducer
];
