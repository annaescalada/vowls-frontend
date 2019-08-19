import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading'
import styled from 'styled-components'

const IconSC = styled.img`
  height:80px;
  width:auto;
  margin: 6% 10%;
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
      V: false },
  } 

  handleClick = (key) => {
    if (this.state.buttons[key] === true) {
      this.setState({
        buttons: { ...this.state.buttons, [key]: false},
      })
    } else {
        this.setState({
          buttons: {...this.state.buttons, [key]: true},
        })
      }
    }

  componentDidMount() {
    setTimeout(()=> this.setState({
      isLoading:false
    }) , 3000)
  }
  

  render () {
    const foodGroupsTitles = ['Cereales integrales', 'Alimentos proteicos', 'Tubérculos', 'Fruta', 'Frutos rojos', 'Crucíferas', 'Hortalizas', 'Otras verduras', 'Omega 3', 'Grasas saludables', 'Lácteos vegetales'];
    const foodGroupsIcons = ['./images/Food-icons/cereals.png', './images/Food-icons/Protein.png', './images/Food-icons/Tubers.png', './images/Food-icons/Fruit.png', './images/Food-icons/Berries.png', './images/Food-icons/Cruciferous.png', './images/Food-icons/Greens.png', './images/Food-icons/Otherveg.png', './images/Food-icons/Omega.png', './images/Food-icons/Fat.png', './images/Food-icons/Dairy.png'] 
    const { buttons } = this.state;
    console.log(this.state);
    return (
    <>
    <section>
      {!this.state.isLoading ?
      <>
        <FoodTitle>Desayuno</FoodTitle>
        <MealContainerSC>
          <IconSC className={!buttons.A ? 'greyScale' :null } onClick={() => this.handleClick('A')} src={foodGroupsIcons[3]} alt=""/>
          <IconSC className={!buttons.B ? 'greyScale' :null } onClick={() => this.handleClick('B')} src={foodGroupsIcons[4]} alt=""/>
          <IconSC className={!buttons.C ? 'greyScale' :null } onClick={() => this.handleClick('C')} src={foodGroupsIcons[10]} alt=""/>
          <IconSC className={!buttons.D ? 'greyScale' :null } onClick={() => this.handleClick('D')} src={foodGroupsIcons[8]} alt=""/>
        </MealContainerSC>

        <FoodTitle>Snack</FoodTitle>
        <MealContainerSC>
          <IconSC className={!buttons.E ? 'greyScale' :null } onClick={() => this.handleClick('E')} src={foodGroupsIcons[3]} alt=""/>
          <IconSC className={!buttons.F ? 'greyScale' :null } onClick={() => this.handleClick('F')} src={foodGroupsIcons[10]} alt=""/>
          <IconSC className={!buttons.G ? 'greyScale' :null } onClick={() => this.handleClick('G')} src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
        <FoodTitle>Comida</FoodTitle>
        <MealContainerSC>
          <IconSC className={!buttons.H ? 'greyScale' :null } onClick={() => this.handleClick('H')} src={foodGroupsIcons[0]} alt=""/>
          <IconSC className={!buttons.I ? 'greyScale' :null } onClick={() => this.handleClick('I')} src={foodGroupsIcons[1]} alt=""/>
          <IconSC className={!buttons.J ? 'greyScale' :null } onClick={() => this.handleClick('J')} src={foodGroupsIcons[5]} alt=""/>
          <IconSC className={!buttons.K ? 'greyScale' :null } onClick={() => this.handleClick('K')} src={foodGroupsIcons[6]} alt=""/>
          <IconSC className={!buttons.L ? 'greyScale' :null } onClick={() => this.handleClick('L')} src={foodGroupsIcons[7]} alt=""/>
          <IconSC className={!buttons.M ? 'greyScale' :null } onClick={() => this.handleClick('M')} src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
        <FoodTitle>Snack</FoodTitle>
        <MealContainerSC>
          <IconSC className={!buttons.N ? 'greyScale' :null } onClick={() => this.handleClick('N')} src={foodGroupsIcons[3]} alt=""/>
          <IconSC className={!buttons.O ? 'greyScale' :null } onClick={() => this.handleClick('O')} src={foodGroupsIcons[10]} alt=""/>
          <IconSC className={!buttons.P ? 'greyScale' :null } onClick={() => this.handleClick('P')} src={foodGroupsIcons[9]} alt=""/>
        </MealContainerSC>
        <FoodTitle>Cena</FoodTitle>
        <MealContainerSC>
          <IconSC className={!buttons.Q ? 'greyScale' :null } onClick={() => this.handleClick('Q')} src={foodGroupsIcons[2]} alt=""/>
          <IconSC className={!buttons.R ? 'greyScale' :null } onClick={() => this.handleClick('R')} src={foodGroupsIcons[1]} alt=""/>
          <IconSC className={!buttons.S ? 'greyScale' :null } onClick={() => this.handleClick('S')} src={foodGroupsIcons[5]} alt=""/>
          <IconSC className={!buttons.T ? 'greyScale' :null } onClick={() => this.handleClick('T')} src={foodGroupsIcons[6]} alt=""/>
          <IconSC className={!buttons.U ? 'greyScale' :null } onClick={() => this.handleClick('U')} src={foodGroupsIcons[7]} alt=""/>
          <IconSC className={!buttons.V ? 'greyScale' :null } onClick={() => this.handleClick('V')} src={foodGroupsIcons[9]} alt=""/>
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