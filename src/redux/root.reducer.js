import { combineReducers } from 'redux';
import posts from './posts/posts.reducer';
import post from './post/post.reducer';
import user from './user/user.reducer';

export default combineReducers({
  posts,
  post,
  user
});
