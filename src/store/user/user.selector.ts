import { createSelector } from 'reselect';

import { UserState } from './user.reducer';
import { RootState } from '../store';

export const selectUserRedcuer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserRedcuer],
  (user) => user.currentUser
);