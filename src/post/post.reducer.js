import {
  POST_LOADING,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE,
  POSTS_LOADING,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from './post.action.types';

const initialState = {
  currentPostisLoading: false,
  currentPost: null,
  currentPostloadError: null,
  postList: null,
  postListisLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING: {
      return {
        ...state,
        currentPostisLoading: action.payload,
        currentPostloadError: null
      };
    }
    case POST_FETCH_SUCCESS: {
      return {
        ...state,
        currentPost: action.payload
      };
    }
    case POST_FETCH_FAILURE: {
      return {
        ...state,
        currentPost: null,
        currentPostloadError: action.payload
      };
    }
    case POSTS_LOADING: {
      return {
        ...state,
        postListisLoading: action.payload
      };
    }
    case POSTS_FETCH_SUCCESS: {
      return {
        ...state,
        postList: action.payload
      };
    }
    case POSTS_FETCH_FAILURE: {
      return {
        ...state,
        postList: null
      };
    }
    default:
      return state;
  }
}
