import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserListRoute from '../user/user.list.route.jsx';
import PostListRoute from '../post/post.list.route.jsx';
import PostDetailRoute from '../post/post.detail.route.jsx';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={UserListRoute} />
      <Route path="/posts" component={PostListRoute} />
      <Route path="/post/:id" component={PostDetailRoute} />
    </Switch>
  );
}
export default Router;
