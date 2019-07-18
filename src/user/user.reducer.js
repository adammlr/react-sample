import axios from 'axios';
import { createSlice } from 'redux-starter-kit';
import { combineReducers } from 'redux';

/// Reducer Slices
const currentUser = createSlice({
  slice: 'currentUser', //namespace our action type ('currentUser/setCurrentUser')
  initialState: null,
  reducers: {
    setCurrentUser: (state, action) => action.payload, //this will assign the payload to state, we aren't mutating state as its using immer behind the scenes
    clearCurrentUser: () => null
  }
});

const currentUserIsLoading = createSlice({
  slice: 'currentUser',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => action.payload
  }
});

const currentUserLoadError = createSlice({
  slice: 'currentUser',
  initialState: null,
  reducers: {
    setLoadError: (state, action) => action.payload
  }
});

const userList = createSlice({
  slice: 'userList',
  initialState: null,
  reducers: {
    setUserList: (state, action) => action.payload
  }
});

const userListLoading = createSlice({
  slice: 'userList',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => action.payload
  }
});

const userListLoadError = createSlice({
  slice: 'userList',
  initialState: null,
  reducers: {
    setLoadError: (state, action) => action.payload
  }
});

/// Combined Reducer
export default combineReducers({
  currentUser: currentUser.reducer,
  currentUserIsLoading: currentUserIsLoading.reducer,
  currentUserLoadError: currentUserLoadError.reducer,
  userList: userList.reducer,
  userListLoading: userListLoading.reducer,
  userListLoadError: userListLoadError.reducer
});

// export actions needed by other consumers (generated automatically by createSlice)
export const { clearCurrentUser } = currentUser.actions;
// use destructuring so that we get a build time error for typos
// opposed to a run time error via property access (currentUser.actions.clearCurrentUser)

/// Async Actions
export function fetchUser(id) {
  return async dispatch => {
    dispatch(currentUserIsLoading.actions.setIsLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + id,
        {}
      );

      dispatch(currentUserIsLoading.actions.setIsLoading(false));
      dispatch(currentUser.actions.setCurrentUser(response.data));
    } catch (err) {
      dispatch(currentUserIsLoading.actions.setIsLoading(false));
      dispatch(currentUserLoadError.actions.setLoadError(err.message));
    }
  };
}

export function fetchUsers() {
  return async dispatch => {
    dispatch(userListLoading.actions.setIsLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
        {}
      );

      dispatch(userListLoading.actions.setIsLoading(false));
      dispatch(userList.actions.setUserList(response.data));
    } catch (err) {
      dispatch(userListLoading.actions.setIsLoading(false));
      dispatch(userListLoadError.actions.setLoadError(err.message));
    }
  };
}
