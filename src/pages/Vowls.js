import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';
import VowlChart from '../components/VowlChart'

class Vowls extends Component {
  state ={
    isLoading: false
  } 

  componentDidMount() {
    setTimeout(()=> this.setState({
      isLoading:true
    }) , 3000)
  }

  render() {
    return (
      <>
      <section>
        {this.state.isLoading ?
        <>
          <VowlChart></VowlChart>
        </>
      
        : 
        
        <Loading text1='Generando un' span='vowl' text2='saludable, equilibrado, completo y delicioso!'></Loading>
      }
      <div className='last'></div>
      </section>
      </>
      )
  }
}

export default withAuth(Vowls);
