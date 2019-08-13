import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>This is the Profile</h1>
      </div>
    )
  }
}

export default withAuth(Profile);