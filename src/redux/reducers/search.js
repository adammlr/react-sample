import { SEARCH } from '../actionTypes';

const initialState = {
  searchText: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        searchText: action.payload
      };
    }
    default:
      return state;
  }
}
