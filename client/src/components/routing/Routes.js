import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../authentication/Login';
import Register from '../authentication/Register';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Routes;
