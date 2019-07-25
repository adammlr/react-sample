import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
const UserListRoute = lazy(() => import('../user/user.list.route.jsx'));
const PostListRoute = lazy(() => import('../post/post.list.route.jsx'));
const PostDetailRoute = lazy(() => import('../post/post.detail.route.jsx'));

function Router() {
  return (
    <Suspense fallback="loading">
      <Switch>
        <Route exact path="/" component={UserListRoute} />
        <Route path="/posts" component={PostListRoute} />
        <Route path="/post/:id" component={PostDetailRoute} />
      </Switch>
    </Suspense>
  );
}
export default Router;
