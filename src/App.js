import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components'

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';
import Logo from './components/Logo.js';

import NutriForm from './pages/NutriForm';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound.js';
import Vowls from './pages/Vowls.js';
import Profile from './pages/Profile.js';
import Foods from './pages/Foods.js';
import Meals from './pages/Meals.js';

import AuthProvider from './contexts/auth-context.js';

import './App.css';
import 'milligram';
import PrivateRegistrationRoute from './components/PrivateRegistrationRoute.js';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <Logo />
            <Switch>
              <AnonRoute exact path="/" component={Login} />
              <AnonRoute exact path="/signup" component={Signup} />
              <PrivateRegistrationRoute exact path="/nutriform" component={NutriForm} />
              <PrivateRoute exact path="/vowls" component={Vowls} />
              <PrivateRoute exact path="/foods" component={Foods} />
              <PrivateRoute exact path="/meals" component={Meals} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route component={NotFound}/>
      
            </Switch>
            {/* Navbar render condicional a loggedIN */}
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
