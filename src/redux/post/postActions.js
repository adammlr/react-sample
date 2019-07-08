import axios from 'axios';

import {
  POST_LOADING,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE
} from '../actionTypes';

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
  return dispatch => {
    dispatch(postLoading(true));

    //simulate a response delay
    setTimeout(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/' + id, {})
        .then(response => {
          dispatch(postLoading(false));
          dispatch(postFetchSuccess(response.data));
        })
        .catch(err => {
          dispatch(postLoading(false));
          dispatch(postFetchFailure(err.message));
        });
    }, 1000);
  };
}
