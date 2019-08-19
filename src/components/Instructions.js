import React, { Component } from 'react'
import styled from 'styled-components'
import { foodGroups, foodGroupToIcon, foodGroupToName, portionConvert} from '../helpers/foodConvert'


const QuestionMarkSC = styled.p`
    font-size: 15px;
    border: 1px solid #676666;
    border-radius: 50%;
    width:25px;
    height: 25px;
    text-align:center;
    margin: 0;
    color: #676666;
`;

const InstructionsContainerSC = styled.div`
    display:flex;
    align-items:center;
    margin: 10px;
    width:auto;
`;

const InstructionsSubContainerSC = styled.div`
display: flex;
flex-direction:column;
align-items: center;
border: 1px solid #ccccccad;
border-radius: 10px;
margin: 10px 0 20px 0;
padding:5%;
f
`;

const InstructionsTextSC = styled.p`
    font-size: 16px;
    color: #676666;
`;

const IconSC = styled.img`
  height:25px;
  width:auto;
  margin: 0;
`;

const FoodGroupContainerSC = styled.div`
display:flex;
flex-wrap: wrap;
`;

const FoodGroupTitleSC = styled.div`
    display:flex;
    align-items:center;
    width: 48%!important;
`;

class InstructionsMeals extends Component {
    state = {
        instructions: false,
        foods:this.props.foods,
        meals:this.props.meals,
    }

handleClickInstructions = () => {
    console.log(this.state.instructions);

    if (this.state.instructions === false) {
    this.setState({
        instructions:true,
    })
    } else {
        this.setState({
        instructions:false,
        })
    }
    }

    render() {
        return (
            <>
                <InstructionsContainerSC onClick={this.handleClickInstructions}>
                    <QuestionMarkSC>?</QuestionMarkSC>
                    <InstructionsTextSC>Instrucciones</InstructionsTextSC>
                </InstructionsContainerSC>
                {this.state.instructions && this.state.foods ?
                <InstructionsSubContainerSC>
                    <InstructionsTextSC>A continuación tienes <span> un listado de alimentos y el tamaño de ración adaptada a tus necesidades</span></InstructionsTextSC>
                    <InstructionsTextSC>Los gramajes corresponden al peso de los alimentos en crudo.</InstructionsTextSC>
                </InstructionsSubContainerSC>
                : null}
                {this.state.instructions && this.state.meals ?
                <InstructionsSubContainerSC>
                    <InstructionsTextSC>Para subir la puntuación, <span> selecciona los grupos de alimentos a medida que los consumes a lo largo del día</span>. Consulta los alimentos de cada grupo y el tamaño de la ración personalizada en la pestaña de foods.</InstructionsTextSC>
                    <FoodGroupContainerSC>
                    {foodGroups.map(group => {
                        return (
                                <FoodGroupTitleSC>
                                    <IconSC src={foodGroupToIcon(group)} alt={foodGroupToName(group)}/>
                                    <InstructionsTextSC>{foodGroupToName(group)}</InstructionsTextSC>
                                </FoodGroupTitleSC>
                        )
                    })}
                    </FoodGroupContainerSC>
                </InstructionsSubContainerSC>
                : null}
            </>              
        )
    }
}


export default InstructionsMeals;