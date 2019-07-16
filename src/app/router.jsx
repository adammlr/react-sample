import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRoute from 'components/home/home.route.jsx';
import PostsRoute from 'components/posts/posts.route.jsx';
import PostRoute from 'components/posts/post.route.jsx';

//https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless
function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route path="/posts" component={PostsRoute} />
      <Route path="/post/:id" component={PostRoute} />
    </Switch>
  );
}
export default Router;
