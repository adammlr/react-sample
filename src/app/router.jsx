import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/login.jsx';
import Home from '../home/home.jsx';
import Register from '../register/register.jsx';

//https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless
function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
export default Router;
