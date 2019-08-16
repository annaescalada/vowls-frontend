import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import foodService from '../services/food-service'
import Loading from '../components/Loading'
import styled from 'styled-components'

const IconSC = styled.img`
  height:100px;
  width:auto;
  margin-right:25px;
`;

const FoodGroupsArticleSC = styled.article`
  display:flex;
  flex-direction:column;
  margin-bottom: 50px;
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
  font-size: 25px;
  width: 100%;
`;

const FoodPortion =styled.p`
  width: 160px;
  text-align:right;
`;




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
    , 3000)})
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const {foods} = this.state;
    const foodGroups = ['cereals', 'proteins', 'tubers', 'fruit', 'berries', 'cruciferous', 'greens', 'othervegs', 'omega', 'fat', 'dairy'];
    const foodGroupsTitles = ['Cereales integrales', 'Alimentos proteicos', 'Tubérculos', 'Fruta', 'Frutos rojos', 'Crucíferas', 'Hortalizas', 'Otras verduras', 'Omega 3', 'Grasas saludables', 'Lácteos vegetales'];
    const foodGroupsIcons = ['./images/Food-icons/cereals.png', './images/Food-icons/Protein.png', './images/Food-icons/Tubers.png', './images/Food-icons/Fruit.png', './images/Food-icons/Berries.png', './images/Food-icons/Cruciferous.png', './images/Food-icons/Greens.png', './images/Food-icons/Otherveg.png', './images/Food-icons/Omega.png', './images/Food-icons/Fat.png', './images/Food-icons/Dairy.png'] 
    return (
    <>
    <section>
      {this.state.isLoading ?
      <>
        {foodGroupsIcons.map((icon, index) => {
          return (
            <FoodGroupsArticleSC>
              <FoodsContainerSC>
                <IconSC src={icon} alt=""/>
                <FoodTitle>{foodGroupsTitles[index]}</FoodTitle>
              </FoodsContainerSC>
              {foods.map(food => {
                return (
                  <>
                  {food.group === foodGroups[index] ?
                  <FoodsPortionContainerSC key={food._id}>
                    <p>{food.name}</p>
                    <FoodPortion><span>{food.portion === 0 ? 'Libre' : `${food.portion * this.props.user.portion} g`} </span></FoodPortion>
                  </FoodsPortionContainerSC>
                  : null}
                  </>
                )
              })}
            </FoodGroupsArticleSC>
          )
        })}
        <p><span>* Los gramajes corresponden al peso del alimento en crudo.</span></p>
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