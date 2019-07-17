import axios from 'axios';
import { createSlice } from 'redux-starter-kit';
import { combineReducers } from 'redux';

const currentUser = createSlice({
  slice: 'currentUser',
  initialState: null,
  reducers: {
    setCurrentUser: (state, action) => action.payload,
    clearCurrentUser: () => null
  }
});

export const clearCurrentUser = currentUser.actions.clearCurrentUser;

const currentUserIsLoading = createSlice({
  slice: 'currentUserIsLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => action.payload
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
  slice: 'userListLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => action.payload
  }
});

const reducer = combineReducers({
  currentUser: currentUser.reducer,
  userList: userList.reducer
});

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
      //dispatch(userFetchFailure(err.message));
    }
  };
}

export function fetchUsers(id) {
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
      //dispatch(usersFetchFailure(err.message));
    }
  };
}

export default reducer;
