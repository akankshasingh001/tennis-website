import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Dashboard from '../dashboard/UserDashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
