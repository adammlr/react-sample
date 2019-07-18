import { createSlice, createSelector } from 'redux-starter-kit';
import fetchData from '../redux/api.dispatch';

/// Reducers
const slice = createSlice({
  slice: 'userDetail', //namespace our action type ('currentUser/setCurrentUser')
  initialState: {
    data: null,
    isLoading: false,
    loadError: null
  },
  reducers: {
    setCurrentUser(state, action) {
      state.data = action.payload;
    }, //this will assign the payload to state, we aren't mutating state as its using immer behind the scenes
    clearCurrentUser(state) {
      state.data = null;
    },
    setCurrentUserIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentUserLoadError(state, action) {
      state.loadError = action.payload;
    }
  }
});

export default slice.reducer;

/// actions
const {
  setCurrentUser,
  clearCurrentUser,
  setCurrentUserIsLoading,
  setCurrentUserLoadError
} = slice.actions;

export function fetchUser(id) {
  const beforeFetch = () => clearCurrentUser();

  return fetchData({
    route: `users/${id}`,
    isLoading: setCurrentUserIsLoading,
    dataLoaded: setCurrentUser,
    loadError: setCurrentUserLoadError,
    beforeFetch
  });
}
/// selectors
const { getUserDetail } = slice.selectors;
export const currentUserData = createSelector(
  [getUserDetail],
  user => user.data
);
export const currentUserIsLoading = createSelector(
  [getUserDetail],
  user => user.isLoading
);
export const currentUserLoadError = createSelector(
  [getUserDetail],
  user => user.loadError
);
