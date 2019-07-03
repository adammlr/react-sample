export const getSearchState = store => store.search;

export const getSearchTerm = store =>
  getSearchState(store) ? getSearchState(store).searchText : null;
