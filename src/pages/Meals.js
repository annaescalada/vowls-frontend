import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading'
import styled from 'styled-components'
import Instructions from '../components/Instructions.js';
import BasicMeals from '../components/BasicMeals.js';
import MealsDateScore from '../components/MealsDateScore.js';
import mealsService from '../services/meals-service';
import {compareDates} from '../helpers/compareDates';
import authService from '../services/auth-service.js';

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

      date: new Date(2019, 12, 12),

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
    }

  componentDidMount() {
    this.props.me()
    .then(() => {
      const { meals } = this.props.user;
      let lastMealDate;
  
      if (meals[meals.length - 1]) {
        lastMealDate = new Date(meals[meals.length - 1].date);
      } else {lastMealDate = undefined}
  
      if (lastMealDate && compareDates(lastMealDate, this.state.date)) {
        this.setState ({
          buttons: meals[meals.length - 1].buttons,
          score: meals[meals.length - 1].score,
          isLoading:false,
        })} else {
          setTimeout(()=> this.setState({
            isLoading:false
          }) , 2000)
        }
    })
  }

  componentWillUnmount() {
    const { buttons, date, score } = this.state;
    const currentMeal = { buttons, date, score };
    
    const { meals } = this.props.user;
    const newMeals = [...meals];

    let lastMealDate;
    if (meals[meals.length - 1]) {
      lastMealDate = new Date(meals[meals.length - 1].date);
    } else {lastMealDate = undefined}

    if (lastMealDate && compareDates(lastMealDate, currentMeal.date)) {
      newMeals.splice([newMeals.length - 1], 1, currentMeal);
    } else {
      newMeals.push(currentMeal)
    }

    console.log(newMeals);

    mealsService.saveMeals( {newMeals} )
    .then(() => {
      console.log('meals updated');
    })
    .catch( error => {
      console.log(error);
    })
  }
 

  render () {
    const { buttons, score } = this.state;
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