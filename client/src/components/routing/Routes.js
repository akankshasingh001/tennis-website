import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Dashboard from '../dashboard/UserDashboard';
import EditDetails from '../dashboard/EditDetails';
import SearchUser from '../dashboard/SearchUser';
import LeagueRegistrationDashboard from '../leagueDetails/LeagueRegistrationDashboard';
import NotFound from '../layout/NotFound';

import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/editDetails" exact component={EditDetails} />
      <PrivateRoute path="/searchPlayer" exact component={SearchUser} />
      <PrivateRoute
        path="/leagueRegister"
        exact
        component={LeagueRegistrationDashboard}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
