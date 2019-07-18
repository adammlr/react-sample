import axios from 'axios';
import { createSlice, createSelector } from 'redux-starter-kit';
import { fetchUser } from 'user/user.detail.duck';

/// Reducers
const slice = createSlice({
  slice: 'postDetail', //namespace our action type ('currentPost/setCurrentPost')
  initialState: {
    data: null,
    isLoading: false,
    loadError: null
  },
  reducers: {
    setCurrentPost(state, action) {
      state.data = action.payload;
    }, //this will assign the payload to state, we aren't mutating state as its using immer behind the scenes
    clearCurrentPost(state) {
      state.data = null;
    },
    setCurrentPostIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentPostLoadError(state, action) {
      state.loadError = action.payload;
    }
  }
});

export default slice.reducer;

/// actions
const {
  setCurrentPost,
  clearCurrentPost,
  setCurrentPostIsLoading,
  setCurrentPostLoadError
} = slice.actions;

export function fetchPost(id) {
  return async dispatch => {
    dispatch(clearCurrentPost());
    dispatch(setCurrentPostLoadError(null));
    dispatch(setCurrentPostIsLoading(true));

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id,
        {}
      );
      dispatch(setCurrentPost(response.data));
      dispatch(fetchUser(response.data.userId));
    } catch (err) {
      dispatch(setCurrentPostLoadError(err.message));
    }

    dispatch(setCurrentPostIsLoading(false));
  };
}
/// selectors
const { getPostDetail } = slice.selectors;
export const currentPostData = createSelector(
  [getPostDetail],
  post => post.data
);
export const currentPostIsLoading = createSelector(
  [getPostDetail],
  post => post.isLoading
);
export const currentPostLoadError = createSelector(
  [getPostDetail],
  post => post.loadError
);
