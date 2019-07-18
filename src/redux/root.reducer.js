import { combineReducers } from 'redux';
import postList from '../post/post.list.state';
import postDetail from '../post/post.detail.state';
import userList from '../user/user.list.state';
import userDetail from '../user/user.detail.state';

export default combineReducers({
  postList,
  postDetail,
  userList,
  userDetail
});
