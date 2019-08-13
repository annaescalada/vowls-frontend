import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';

class NutriForm extends Component {
  render() {
    return (
      <div>
        <h1>This is the nutriform</h1>
      </div>
    )
  }
}

export default withAuth(NutriForm);