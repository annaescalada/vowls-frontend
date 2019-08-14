import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import ChangePassword from '../components/ChangePassword.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>This is the Profile</h1>
        <ChangePassword></ChangePassword>
      </div>
    )
  }
}

export default withAuth(Profile);