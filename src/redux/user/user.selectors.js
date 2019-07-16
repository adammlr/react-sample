import { createSelector } from 'reselect';

const base = state => state.user;

export const selectUser = createSelector(
  [base],
  user => user.user
);
