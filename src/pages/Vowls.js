import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import ProgressNutriBar from '../components/ProgressNutriBar.js';

class Vowls extends Component {
  render() {
    return (
      <div>
        <h1>This is the Vowls</h1>
      </div>
    )
  }
}

export default withAuth(Vowls);
