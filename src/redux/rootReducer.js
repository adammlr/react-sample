import { combineReducers } from 'redux';
import posts from './posts/postsReducer';
import post from './post/postReducer';
import user from './user/userReducer';

export default combineReducers({
  posts,
  post,
  user
});
