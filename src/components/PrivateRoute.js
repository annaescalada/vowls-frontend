import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from './withAuth';

const PrivateRoute = (props) => {
  const { user, isLoggedIn, component: Component, ...rest} = props;
  if (isLoggedIn) {
    return (
      <>
        { user.complete ? <Route exact
          render={(props) => {
            return <Component {...props}/>
          }}
          {...rest}
        /> : <Redirect to='/nutriform' />}
      </>
    )
  } else {
    return <Redirect to='/' />
  }
}

export default withAuth(PrivateRoute);
