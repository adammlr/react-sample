import axios from 'axios';
import { createSlice, createSelector } from 'redux-starter-kit';

// reducer
const slice = createSlice({
  slice: 'postList',
  initialState: {
    data: null,
    isLoading: false,
    loadError: null
  },
  reducers: {
    setPostList(state, action) {
      state.data = action.payload;
    },
    clearPostList(state) {
      state.data = null;
    },
    setPostListIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPostListLoadError(state, action) {
      state.loadError = action.payload;
    }
  }
});

export default slice.reducer;

// actions
const {
  setPostList,
  setPostListIsLoading,
  setPostListLoadError
} = slice.actions;

export function fetchPosts() {
  return async dispatch => {
    dispatch(setPostListIsLoading(true));
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {}
      );

      dispatch(setPostList(response.data));
    } catch (err) {
      dispatch(setPostListLoadError(err.message));
    }

    dispatch(setPostListIsLoading(false));
  };
}

// selectors
const { getPostList } = slice.selectors;

export const postListData = createSelector(
  [getPostList],
  postList => postList.data
);
export const postListIsLoading = createSelector(
  [getPostList],
  postList => postList.isLoading
);
