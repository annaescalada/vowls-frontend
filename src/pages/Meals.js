import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';

class Meals extends Component {
  render() {
    return (
      <div>
        <h1>This is the Meals</h1>
      </div>
    )
  }
}

export default withAuth(Meals);