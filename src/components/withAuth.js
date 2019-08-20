import React, {Component} from 'react'
import {AuthContext} from '../contexts/auth-context.js';

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return(
        <AuthContext.Consumer>
          {({user, isLoggedIn, login, signup, logout, update, changePassword, deleteUser, me}) => (
            <Comp  
            user={user}
            isLoggedIn={isLoggedIn} 
            me= {me}
            login={login}
            signup={signup}
            logout={logout}
            update={update}
            changePassword={changePassword}
            delete={deleteUser}
            {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}

export default withAuth;