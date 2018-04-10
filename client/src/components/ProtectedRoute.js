import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withUser } from '../services/withUser';

const ProtectedRoute = ({ component: Component, user, redirectTo, ...rest }) => (
  <Route {...rest} render={(props) => (
    user === null
    ? <Redirect to={{
        pathname: redirectTo || '/register',
        state: { from: props.location }
      }} />
      : <Component {...{ ...props, user}} />
  )} />
);

export default withUser(ProtectedRoute);
