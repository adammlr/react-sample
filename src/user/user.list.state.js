import { createSlice, createSelector } from 'redux-starter-kit';
import fetchData from '../redux/api.dispatch';

// reducer
const slice = createSlice({
  slice: 'userList',
  initialState: {
    data: null,
    isLoading: false,
    loadError: null
  },
  reducers: {
    setUserList(state, action) {
      state.data = action.payload;
    },
    clearUserList(state) {
      state.data = null;
    },
    setUserListIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUserListLoadError(state, action) {
      state.loadError = action.payload;
    }
  }
});

export default slice.reducer;

// actions
const {
  setUserList,
  setUserListIsLoading,
  setUserListLoadError
} = slice.actions;

export function fetchUsers() {
  return fetchData({
    route: 'users',
    isLoading: setUserListIsLoading,
    dataLoaded: setUserList,
    loadError: setUserListLoadError
  });
}

// selectors
const { getUserList } = slice.selectors;

export const userListData = createSelector(
  [getUserList],
  userList => userList.data
);
export const userListIsLoading = createSelector(
  [getUserList],
  userList => userList.isLoading
);
