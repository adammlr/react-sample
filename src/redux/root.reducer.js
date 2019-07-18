import { combineReducers } from 'redux';
import postList from '../post/post.list.duck';
import postDetail from '../post/post.detail.duck';
import userList from '../user/user.list.duck';
import userDetail from '../user/user.detail.duck';

export default combineReducers({
  postList,
  postDetail,
  userList,
  userDetail
});
