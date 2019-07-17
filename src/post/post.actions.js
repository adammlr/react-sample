import axios from 'axios';
import { fetchUser, userClear } from '../user/user.actions';

import {
  POST_LOADING,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE,
  POSTS_LOADING,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from './post.action.types';

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

export function postsFetchFailure(message) {
  return {
    type: POSTS_FETCH_FAILURE,
    payload: message
  };
}

export function postsLoading(bool) {
  return {
    type: POSTS_LOADING,
    payload: bool
  };
}

export function postsFetchSuccess(items) {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload: items
  };
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(postsLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {}
      );

      dispatch(postsLoading(false));
      dispatch(postsFetchSuccess(response.data));
    } catch (err) {
      dispatch(postsLoading(false));
      dispatch(postsFetchFailure(err.message));
    }
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
