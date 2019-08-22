import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading'
import Instructions from '../components/Instructions.js';
import BasicMeals from '../components/BasicMeals.js';
import MealsDateScore from '../components/MealsDateScore.js';
import mealsService from '../services/meals-service';
import {compareDates} from '../helpers/compareDates';
import {basicMeal } from '../helpers/mealTypes';
import MealStatistics from '../components/MealStatistics.js';
import { mealStatisticsConverter } from '../helpers/mealStatisticsConverter';


class Meals extends Component {
  state ={
    isLoading: true,
    index:0,
    meals:[],
    today: new Date(),
    instructions:false,
    statistics:false,
  } 

  handleClick = (key) => {
    const {meals, index} = this.state;
    const newDate = meals[index].date;
    let newScore;
    let newButtons;
    let newMeals;
    if (meals[index].buttons[key] === true) {
      newScore = (meals[index].score - 1);
      newButtons = { ...meals[index].buttons, [key]: false};
      newMeals = [...meals];
      newMeals[index] = {date:newDate, score:newScore, buttons:newButtons}
      this.setState({
        meals: newMeals,
        statistics:false,
      })
    } else {
      newScore = (meals[index].score + 1);
      newButtons = { ...meals[index].buttons, [key]: true};
      newMeals = [...meals];
      newMeals[index] = {date:newDate, score:newScore, buttons:newButtons}
      this.setState({
        meals: newMeals,
        statistics: false,
      })
    }

    mealsService.saveMeals( {newMeals} )
    .then(() => {
    })
    .catch( error => {
      console.log(error);
    })
    }

  handleNextClick = () => {
    if (this.state.index < this.state.meals.length-1) {
      const newIndex = this.state.index + 1;
      this.setState({
        statistics:false,
        index: newIndex 
      });
    }
  }

  handleBackClick = () => {
    if (this.state.index > 0) {
      const newIndex = this.state.index - 1;
      this.setState({
        index: newIndex,
        statistics: false,
       });
    }
  }

  handleStatisticsClick = () => {
    this.setState({
      statistics: !this.state.statistics
    })
  }

  componentDidMount() {
    this.props.me()
    .then(() => {
      let { meals } = this.props.user;
      let lastMealDate = null;

      if (!meals[meals.length - 1]) {
        meals.push(basicMeal);
        setTimeout(()=> this.setState({
          isLoading:false,
          meals,
          index: meals.length -1,
        }) , 2000);
      } else {
        lastMealDate = new Date(meals[meals.length - 1].date);
        if (!compareDates(lastMealDate, this.state.today)) {
          meals.push(basicMeal);
          setTimeout(()=> this.setState({
            isLoading:false,
            meals,
            index: meals.length -1,
          }) , 2000);
        } else {
        this.setState({
          isLoading:false,
          meals,
          index: meals.length -1,
        });
      }
    }
    }) 
  }

  render () {
    const { meals, index, statistics } = this.state;
    return (
    <>
    <section>
      {!this.state.isLoading ?
      <>
        <MealsDateScore date={new Date (meals[index].date)} score={meals[index].score} buttons={meals[index].buttons} index={index} lastIndex={meals.length - 1} handleNextClick={this.handleNextClick} handleBackClick={this.handleBackClick}></MealsDateScore>
        <p onClick={this.handleStatisticsClick}><span>Estadísticas últimos 7 días</span></p>
        {statistics?
        <MealStatistics meals={mealStatisticsConverter(meals)}></MealStatistics>
        : null}
        <Instructions meals={true}></Instructions>
        <BasicMeals buttons={meals[index].buttons} handleClick={this.handleClick} />
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