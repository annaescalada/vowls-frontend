import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import foodService from '../services/food-service'
import Loading from '../components/Loading'
import styled from 'styled-components'
import { foodGroups, foodGroupToIcon, foodGroupToName, portionConvert} from '../helpers/foodConvert'
import Instructions from '../components/Instructions.js';

const IconSC = styled.img`
  height:70px;
  width:auto;
  margin-right:25px;
`;

const FoodGroupsArticleSC = styled.article`
  display:flex;
  flex-direction:column;
  margin-bottom: 50px;
  background: #c25c7817;
  border-radius: 25px;
  padding: 4%;
`;

const FoodsContainerSC = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 10px;
`;

const FoodsPortionContainerSC = styled.div`
  display:flex;
  justify-content: space-between;
`;


const FoodTitle =styled.p`
  font-weight: 600;
  font-size: 20px;
  width: 100%;
`;

const FoodPortion =styled.p`
  width: 160px;
  text-align:right;
`;

class Foods extends Component {
  state ={
    foods: [],
    isLoading: true
  } 

  componentDidMount() {
    foodService.getFoods()
    .then((foods) => {
      this.setState(foods);
      setTimeout(()=> this.setState({isLoading:false})
    , 2000)})
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const {foods} = this.state;
    return (
    <>
    <section>
      {!this.state.isLoading ?
      <>
        <Instructions foods={true}></Instructions>
        {foodGroups.map((group, index) => {
          return (
            <FoodGroupsArticleSC>
              <FoodsContainerSC>
                <IconSC src={foodGroupToIcon(group)} alt=""/>
                <FoodTitle>{foodGroupToName(group)}</FoodTitle>
              </FoodsContainerSC>
              {foods.map(food => {
                return (
                  <>
                  {food.group === foodGroups[index] ?
                  <FoodsPortionContainerSC key={food._id}>
                    <p>{food.name}</p>
                    <FoodPortion><span>{food.portion === 0 ? 'Libre' : `${food.portion * portionConvert(food.group,this.props.user.portion)} g`} </span></FoodPortion>
                  </FoodsPortionContainerSC>
                  : null}
                  </>
                )
              })}
            </FoodGroupsArticleSC>
          )
        })}
        </>

      : 
      
      <Loading text1='Calculando' span='raciones personalizadas' text2='de cada grupo de alimentos…'></Loading>
    }
    <div className='last'></div>
    </section>
    </>
    )
  }
}

export default withAuth(Foods);