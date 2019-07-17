import {
  USER_CLEAR,
  USER_LOADING,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
  USERS_LOADING,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE
} from './user.action.types';

const initialState = {
  currentUser: null,
  currentUserisLoading: false,
  currentUserLoadError: null,
  userList: null,
  userListIsLoading: null,
  userListLoadError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        currentUserisLoading: action.payload,
        currentUserLoadError: null
      };
    }
    case USER_CLEAR: {
      return {
        ...state,
        currentUser: null
      };
    }
    case USER_FETCH_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload
      };
    }
    case USER_FETCH_FAILURE: {
      return {
        ...state,
        currentUser: null,
        currentUserLoadError: action.payload
      };
    }
    case USERS_LOADING: {
      return {
        ...state,
        userListIsLoading: action.payload,
        userListLoadError: null
      };
    }
    case USERS_FETCH_SUCCESS: {
      return {
        ...state,
        userList: action.payload
      };
    }
    case USERS_FETCH_FAILURE: {
      return {
        ...state,
        userList: null,
        userListLoadError: action.payload
      };
    }
    default:
      return state;
  }
}
