import React, { Component } from 'react';
import authService from '../services/auth-service.js';

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    user: {},
    isLoading: true,
  }

  userSignUp = (user) => {
    return authService.signup(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    })
  }
  
  userLogin = (user) => {
    return authService.login(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    }) 
  }
  
  userLogout = () => {
    return authService.logout()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }
  
  userUpdate = (user) => {
    return authService.update(user)
    .then((user) => {
        console.log('in update auth-context', user);
        this.setState({
          user: user,
        });
    })
  }

  userChangePassword = (newPassword) => {
    return authService.changePassword(newPassword)
    .then((user) => {
      this.setState({
        user: user,
      })
      return user;
    })
  }

  userDelete = () => {
    return authService.delete()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }

  getMe = () => {
    authService.me()
    .then(user => {
      this.setState({
        user,
        isLoggedIn: true,
        isLoading: false,
      })
    })
    .catch(() => {
      this.setState({
        isLoggedIn: false,
        user: {},
        isLoading: false,
      })
    })
  }

  componentDidMount() {
    this.getMe();
  }

  render() {
    const {user, isLoggedIn, isLoading} = this.state;
    return (
      <>
        {isLoading ? <p>Cargando...</p> : (
            <AuthContext.Provider value={ 
              {
                user,
                isLoggedIn,
                login: this.userLogin,
                signup: this.userSignUp,
                logout: this.userLogout,
                update: this.userUpdate,
                me: this.getMe,
                changePassword: this.userChangePassword,
                deleteUser: this.userDelete
              }
            }>
              {this.props.children}
            </AuthContext.Provider>
          )}
      </>
    );
  }
}

export default AuthProvider;
