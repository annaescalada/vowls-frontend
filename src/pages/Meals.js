import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';

class Meals extends Component {
  render() {
    return (
      <div>
        <Loading text1='Repartiendo raciones de alimentos en' span='comidas y snacks' text2='...'></Loading>
      </div>
    )
  }
}

export default withAuth(Meals);