import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';

class Vowls extends Component {
  render() {
    return (
      <div>
        <Loading text1='Generando un' span='vowl' text2='saludable, equilibrado, completo y delicioso!'></Loading>
      </div>
    )
  }
}

export default withAuth(Vowls);
