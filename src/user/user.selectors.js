import { createSelector } from 'reselect';

const base = state => state.user;

export const currentUser = createSelector(
  [base],
  user => user.user
);
