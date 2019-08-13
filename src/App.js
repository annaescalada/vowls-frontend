import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound.js';

import AuthProvider from './contexts/auth-context.js';

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            {/* Logo */}
            <Switch>
              <AnonRoute exact path="/" component={Login} />
              <AnonRoute exact path="/signup" component={Signup} />

              <PrivateRoute exact path="/private" component={Private} />
              <Route component={NotFound}/>
            </Switch>}
            {/* Navbar render condicional a loggedIN */}
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
