import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login/login.jsx';
import Home from '../components/home/home.jsx';
import Register from '../components/register/register.jsx';
import Posts from '../components/posts/posts.jsx';
import Post from '../components/posts/post.jsx';

//https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless
function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/posts" component={Posts} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  );
}
export default Router;
