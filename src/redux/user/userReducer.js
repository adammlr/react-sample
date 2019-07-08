import {
  USER_CLEAR,
  USER_LOADING,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE
} from '../actionTypes';

const initialState = {
  isLoading: false,
  user: null,
  loadError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
        loadError: null
      };
    }
    case USER_CLEAR: {
      return {
        ...state,
        user: null
      };
    }
    case USER_FETCH_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_FETCH_FAILURE: {
      return {
        ...state,
        user: null,
        loadError: action.payload
      };
    }
    default:
      return state;
  }
}
