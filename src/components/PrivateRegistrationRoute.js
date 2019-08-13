import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from './withAuth';

const PrivateRegistrarionRoute = (props) => {
  console.log(props)
  const { user, isLoggedIn, component: Component, ...rest} = props;
  if (isLoggedIn) {
    return (
      <>
        { !user.complete ? <Route exact
          render={(props) => {
            return <Component {...props}/>
          }}
          {...rest}
        /> : <Redirect to='/vowls' />}
      </>
    )
  } else {
    return <Redirect to='/' />
  }
}

export default withAuth(PrivateRegistrarionRoute);