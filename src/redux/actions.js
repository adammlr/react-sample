import { SEARCH } from './actionTypes';

export const search = searchText => ({
  type: SEARCH,
  payload: searchText
});
