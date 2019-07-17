import { createSelector } from 'redux-starter-kit';

const base = state => state.user;

export const currentUser = createSelector(
  [base],
  user => user.currentUser
);

export const userList = createSelector(
  [base],
  user => user.userList
);

export const userListIsLoading = createSelector(
  [base],
  user => user.userListIsLoading
);
