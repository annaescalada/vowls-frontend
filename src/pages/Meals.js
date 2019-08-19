import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading'
import styled from 'styled-components'
import Instructions from '../components/Instructions.js';
import BasicMeals from '../components/BasicMeals.js';
import MealsDateScore from '../components/MealsDateScore.js';

class Meals extends Component {
  state ={
    isLoading: true,
    buttons: { 
      A: false, 
      B: false, 
      C: false, 
      D: false, 
      E: false, 
      F: false, 
      G: false,
      H: false, 
      I: false, 
      J: false, 
      K: false, 
      L: false, 
      M: false,
      N: false,
      O: false,
      P: false,
      Q: false,
      R: false,
      S: false,
      T: false,
      U: false,
      V: false,
      W: false },

      score: 0,

      date: new Date(),

      instructions:false,

  } 

  handleClick = (key) => {
    let newScore;
    if (this.state.buttons[key] === true) {
      newScore = (this.state.score - 1);
      this.setState({
        buttons: { ...this.state.buttons, [key]: false},
        score: newScore,
      })
      
    } else {
      newScore = (this.state.score + 1)

        this.setState({
          buttons: {...this.state.buttons, [key]: true},
          score: newScore,
        })
      }
    
    // send Date, Score, Buttons to backend
    }

  componentDidMount() {
    setTimeout(()=> this.setState({
      isLoading:false
    }) , 2000)
  }
  

  render () {
    const { buttons, score } = this.state;
    console.log(this.state);
    return (
    <>
    <section>
      {!this.state.isLoading ?
      <>
        <MealsDateScore date={this.state.date} score={score} buttons={buttons}></MealsDateScore>
        <Instructions meals={true}></Instructions>
        <BasicMeals buttons={buttons} handleClick={this.handleClick} />
      </>
    
      : 
      
      <Loading text1='Repartiendo raciones de alimentos en' span='comidas y snacks' text2='...'></Loading>
    }
    <div className='last'></div>
    </section>
    </>
    )
  }
}

export default withAuth(Meals);