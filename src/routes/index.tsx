import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={SingIn} />
    <Route path='/signup' component={SignUp} />

    <Route path='/dashboard' component={Dashboard} />
  </Switch>
);

export default Routes;
