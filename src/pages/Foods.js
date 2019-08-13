import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';

class Foods extends Component {
  render() {
    return (
      <div>
        <h1>This is the Foods</h1>
      </div>
    )
  }
}

export default withAuth(Foods);