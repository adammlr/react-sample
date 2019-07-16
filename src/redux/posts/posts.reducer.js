import {
  POSTS_LOADING,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from '../action.types';

const initialState = {
  isLoading: false,
  posts: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POSTS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case POSTS_FETCH_SUCCESS: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case POSTS_FETCH_FAILURE: {
      return {
        ...state,
        posts: null
      };
    }
    default:
      return state;
  }
}
