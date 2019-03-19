import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Consumer>
      {({ isAuth }) => (
          <Route
              render={
                props =>
                    isAuth
                        ? <Component {...props} />
                        : <Redirect to="/signin"/>
              }
              {...rest}
          />
      )}
    </Consumer>
);

export default PrivateRoute;