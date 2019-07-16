import { createSelector } from 'reselect';

const base = state => state.post;

export const selectPost = createSelector(
  [base],
  post => post.post
);

export const selectIsLoading = createSelector(
  [base],
  post => post.isLoading
);

export const selectLoadError = createSelector(
  [base],
  post => post.loadError
);
