import { createSlice, createSelector } from 'redux-starter-kit';
import fetchData from '../redux/api.dispatch';

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
  return fetchData({
    route: 'posts',
    isLoading: setPostListIsLoading,
    dataLoaded: setPostList,
    loadError: setPostListLoadError
  });
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
