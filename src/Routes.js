import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/sign-in" />
        <Route exact path="/sign-in"  component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
