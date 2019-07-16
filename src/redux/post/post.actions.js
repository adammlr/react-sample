import axios from 'axios';
import { fetchUser, userClear } from '../user/user.actions';

import {
  POST_LOADING,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE
} from '../action.types';

export function postFetchFailure(message) {
  return {
    type: POST_FETCH_FAILURE,
    payload: message
  };
}

export function postLoading(bool) {
  return {
    type: POST_LOADING,
    payload: bool
  };
}

export function postFetchSuccess(items) {
  return {
    type: POST_FETCH_SUCCESS,
    payload: items
  };
}

export function fetchPost(id) {
  return async dispatch => {
    dispatch(postLoading(true));
    dispatch(userClear());

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id,
        {}
      );

      dispatch(fetchUser(response.data.userId));
      dispatch(postLoading(false));
      dispatch(postFetchSuccess(response.data));
    } catch (err) {
      dispatch(postLoading(false));
      dispatch(postFetchFailure(err.message));
    }
  };
}
