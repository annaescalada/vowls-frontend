import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import foodService from '../services/food-service'
import Loading from '../components/Loading'

class Foods extends Component {
  state ={
    foods: [],
    isLoading: false
  } 

  componentDidMount() {
    foodService.getFoods()
    .then((foods) => {
      this.setState(foods);
      setTimeout(()=> this.setState({isLoading:true})
    , 4000)})
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const {foods} = this.state;
    console.log(foods);
    console.log(this.props);
    return (
    <>
    <section>
      {this.state.isLoading ?
      foods.map(food => {
        return (
          <article key={food._id}>
            <p>{food.name}</p>
          </article>
        )
      }) 

      : 
      
      <Loading text1='Calculando' span='raciones personalizadas' text2='de cada grupo de alimentos…'></Loading>
    }
    </section>
    </>
    )
  }
}

export default withAuth(Foods);