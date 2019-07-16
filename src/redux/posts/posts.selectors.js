import { createSelector } from 'reselect';

const base = state => state.posts;

export const selectPosts = createSelector(
  [base],
  posts => posts.posts
);

export const selectIsLoading = createSelector(
  [base],
  posts => posts.isLoading
);
