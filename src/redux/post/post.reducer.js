import {
  POST_LOADING,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILURE
} from '../action.types';

const initialState = {
  isLoading: false,
  post: null,
  loadError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
        loadError: null
      };
    }
    case POST_FETCH_SUCCESS: {
      return {
        ...state,
        post: action.payload
      };
    }
    case POST_FETCH_FAILURE: {
      return {
        ...state,
        post: null,
        loadError: action.payload
      };
    }
    default:
      return state;
  }
}
