import { combineReducers } from 'redux';
import post from '../post/post.reducer';
import user from '../user/user.reducer';

export default combineReducers({
  post,
  user
});
