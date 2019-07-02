import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import Register from './components/register/Register.jsx';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
);
export default Router;
