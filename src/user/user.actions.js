import axios from 'axios';

import {
  USER_CLEAR,
  USER_LOADING,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE
} from './user.action.types';

export function userClear() {
  return {
    type: USER_CLEAR
  };
}

export function userFetchFailure(message) {
  return {
    type: USER_FETCH_FAILURE,
    payload: message
  };
}

export function userLoading(bool) {
  return {
    type: USER_LOADING,
    payload: bool
  };
}

export function userFetchSuccess(items) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: items
  };
}

export function fetchUser(id) {
  return async dispatch => {
    dispatch(userLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + id,
        {}
      );

      dispatch(userLoading(false));
      dispatch(userFetchSuccess(response.data));
    } catch (err) {
      dispatch(userLoading(false));
      dispatch(userFetchFailure(err.message));
    }
  };
}
