import { combineReducers } from 'redux';
import posts from './posts/postsReducer';
import post from './post/postReducer';

export default combineReducers({ posts, post });
