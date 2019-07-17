import { createSelector } from 'reselect';

const base = state => state.post;

export const currentPost = createSelector(
  [base],
  post => post.currentPost
);

export const currentPostIsLoading = createSelector(
  [base],
  post => post.currentPostIsLoading
);

export const currentPostLoadError = createSelector(
  [base],
  post => post.currentPostloadError
);

export const postList = createSelector(
  [base],
  posts => posts.postList
);

export const postListIsLoading = createSelector(
  [base],
  posts => posts.postListIsLoading
);
