import React from 'react'
import styled from 'styled-components'

const IconSC = styled.img`
  height:60px;
  width:auto;
  margin: 3% 8%;
`;

const MealContainerSC = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  background: #c25c7817;
  border-radius: 25px;
  padding: 4%;
  width: 100%;
`;

const FoodTitle =styled.p`
  font-weight: 600;
  font-size: 20px;
  width: 100%;   
  margin-bottom: 30px; 
  text-align:center;
`;

function BasicMeals(props) {
    const foodGroupsIcons = ['./images/Food-icons/Cereals.png', './images/Food-icons/Protein.png', './images/Food-icons/Tubers.png', './images/Food-icons/Fruit.png', './images/Food-icons/Berries.png', './images/Food-icons/Cruciferous.png', './images/Food-icons/Greens.png', './images/Food-icons/Otherveg.png', './images/Food-icons/omega.png', './images/Food-icons/Fat.png', './images/Food-icons/Dairy.png'] 
    
    return (
        <>
        <MealContainerSC>
        <FoodTitle><span><b>Desayuno</b></span></FoodTitle>
          <IconSC  className={!props.buttons.W ? 'greyScale' :null } onClick={() => props.handleClick('W')} src={foodGroupsIcons[0]} alt="icon meal"/>
          <IconSC  className={!props.buttons.A ? 'greyScale' :null } onClick={() => props.handleClick('A')} src={foodGroupsIcons[3]} alt="icon meal"/>
          <IconSC  className={!props.buttons.B ? 'greyScale' :null } onClick={() => props.handleClick('B')} src={foodGroupsIcons[4]} alt="icon meal"/>
          <IconSC  className={!props.buttons.C ? 'greyScale' :null } onClick={() => props.handleClick('C')} src={foodGroupsIcons[10]}alt="icon meal"/>
          <IconSC  className={!props.buttons.D ? 'greyScale' :null } onClick={() => props.handleClick('D')} src={foodGroupsIcons[8]} alt="icon meal"/>
        </MealContainerSC>

        <MealContainerSC>
        <FoodTitle><span><b>Media mañana</b></span></FoodTitle>
          <IconSC  className={!props.buttons.E ? 'greyScale' :null } onClick={() => props.handleClick('E')} src={foodGroupsIcons[3]} alt="icon meal"/>
          <IconSC  className={!props.buttons.F ? 'greyScale' :null } onClick={() => props.handleClick('F')} src={foodGroupsIcons[10]}alt="icon meal"/>
          <IconSC  className={!props.buttons.G ? 'greyScale' :null } onClick={() => props.handleClick('G')} src={foodGroupsIcons[9]} alt="icon meal"/>
        </MealContainerSC>
        <MealContainerSC>

        <FoodTitle><span><b>Comida</b></span></FoodTitle>
          <IconSC  className={!props.buttons.H ? 'greyScale' :null } onClick={() => props.handleClick('H')} src={foodGroupsIcons[0]} alt="icon meal"/>
          <IconSC  className={!props.buttons.I ? 'greyScale' :null } onClick={() => props.handleClick('I')} src={foodGroupsIcons[1]} alt="icon meal"/>
          <IconSC  className={!props.buttons.J ? 'greyScale' :null } onClick={() => props.handleClick('J')} src={foodGroupsIcons[5]} alt="icon meal"/>
          <IconSC  className={!props.buttons.L ? 'greyScale' :null } onClick={() => props.handleClick('L')} src={foodGroupsIcons[7]} alt="icon meal"/>
          <IconSC  className={!props.buttons.K ? 'greyScale' :null } onClick={() => props.handleClick('K')} src={foodGroupsIcons[6]} alt="icon meal"/>
          <IconSC  className={!props.buttons.M ? 'greyScale' :null } onClick={() => props.handleClick('M')} src={foodGroupsIcons[9]} alt="icon meal"/>
        </MealContainerSC>

        <MealContainerSC>
        <FoodTitle><span><b>Merienda</b></span></FoodTitle>
          <IconSC  className={!props.buttons.N ? 'greyScale' :null } onClick={() => props.handleClick('N')} src={foodGroupsIcons[3]} alt="icon meal"/>
          <IconSC  className={!props.buttons.O ? 'greyScale' :null } onClick={() => props.handleClick('O')} src={foodGroupsIcons[10]}alt="icon meal"/>
          <IconSC  className={!props.buttons.P ? 'greyScale' :null } onClick={() => props.handleClick('P')} src={foodGroupsIcons[9]} alt="icon meal"/>
        </MealContainerSC>

        <MealContainerSC>
        <FoodTitle><span><b>Cena</b></span></FoodTitle>
          <IconSC  className={!props.buttons.Q ? 'greyScale' :null } onClick={() => props.handleClick('Q')} src={foodGroupsIcons[2]} alt="icon meal"/>
          <IconSC  className={!props.buttons.R ? 'greyScale' :null } onClick={() => props.handleClick('R')} src={foodGroupsIcons[1]} alt="icon meal"/>
          <IconSC  className={!props.buttons.S ? 'greyScale' :null } onClick={() => props.handleClick('S')} src={foodGroupsIcons[5]} alt="icon meal"/>
          <IconSC  className={!props.buttons.U ? 'greyScale' :null } onClick={() => props.handleClick('U')} src={foodGroupsIcons[7]} alt="icon meal"/>
          <IconSC  className={!props.buttons.T ? 'greyScale' :null } onClick={() => props.handleClick('T')} src={foodGroupsIcons[6]} alt="icon meal"/>
          <IconSC  className={!props.buttons.V ? 'greyScale' :null } onClick={() => props.handleClick('V')} src={foodGroupsIcons[9]} alt="icon meal"/>
        </MealContainerSC>
        </>
    )
}

export default BasicMeals
