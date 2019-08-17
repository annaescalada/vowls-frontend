import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading'
import styled from 'styled-components'

const IconSC = styled.img`
  height:80px;
  width:auto;
  margin: 5%;
`;

const MealContainerSC = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FoodTitle =styled.p`
  font-weight: 600;
  font-size: 25px;
  width: 100%;   
  margin-bottom: 30px; 
  text-align:center;
`;


class Meals extends Component {
  state ={
    isLoading: true
  } 

  componentDidMount() {
    setTimeout(()=> this.setState({
      isLoading:false
    }) , 3000)
  }
  

  render () {
    const foodGroupsTitles = ['Cereales integrales', 'Alimentos proteicos', 'Tubérculos', 'Fruta', 'Frutos rojos', 'Crucíferas', 'Hortalizas', 'Otras verduras', 'Omega 3', 'Grasas saludables', 'Lácteos vegetales'];
    const foodGroupsIcons = ['./images/Food-icons/cereals.png', './images/Food-icons/Protein.png', './images/Food-icons/Tubers.png', './images/Food-icons/Fruit.png', './images/Food-icons/Berries.png', './images/Food-icons/Cruciferous.png', './images/Food-icons/Greens.png', './images/Food-icons/Otherveg.png', './images/Food-icons/Omega.png', './images/Food-icons/Fat.png', './images/Food-icons/Dairy.png'] 
    return (
    <>
    <section>
      {!this.state.isLoading ?
      <>
        <FoodTitle>Desayuno</FoodTitle>
        <MealContainerSC>
          <IconSC src={foodGroupsIcons[0]} alt=""/>
          <IconSC src={foodGroupsIcons[4]} alt=""/>
          <IconSC src={foodGroupsIcons[5]} alt=""/>
          <IconSC src={foodGroupsIcons[10]} alt=""/>
          <IconSC src={foodGroupsIcons[8]} alt=""/>
        </MealContainerSC>

        <FoodTitle>Snack</FoodTitle>
        <MealContainerSC>
          <IconSC src={foodGroupsIcons[3]} alt=""/>
          <IconSC src={foodGroupsIcons[10]} alt=""/>
          <IconSC src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
        <FoodTitle>Comida</FoodTitle>
        <MealContainerSC>
          <IconSC src={foodGroupsIcons[0]} alt=""/>
          <IconSC src={foodGroupsIcons[1]} alt=""/>
          <IconSC src={foodGroupsIcons[5]} alt=""/>
          <IconSC src={foodGroupsIcons[6]} alt=""/>
          <IconSC src={foodGroupsIcons[7]} alt=""/>
          <IconSC src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
        <FoodTitle>Snack</FoodTitle>
        <MealContainerSC>
          <IconSC src={foodGroupsIcons[3]} alt=""/>
          <IconSC src={foodGroupsIcons[10]} alt=""/>
          <IconSC src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
        <FoodTitle>Cena</FoodTitle>
        <MealContainerSC>
          <IconSC src={foodGroupsIcons[2]} alt=""/>
          <IconSC src={foodGroupsIcons[1]} alt=""/>
          <IconSC src={foodGroupsIcons[5]} alt=""/>
          <IconSC src={foodGroupsIcons[6]} alt=""/>
          <IconSC src={foodGroupsIcons[7]} alt=""/>
          <IconSC src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
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