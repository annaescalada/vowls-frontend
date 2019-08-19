import React from 'react'
import styled from 'styled-components'

const DateScoreTextSC =styled.p`
  font-weight: 600;
  font-size: 18px;
  width: 100%;   
  margin-bottom: 0px;
  line-height: 20px;
`;

const DateButtonSC = styled.button`
  background-color:#c25c78;
  color:white;
  border: none;
  text-transform: none;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  font-size: 25px;
  width:20%;
  height: 60px;
  border-radius: 10px;
  margin: 2%;
`;

const DateContainerSC = styled.div`
  display:flex;
`;

function MealsDateScore(props) {
    return (
        <>
        <DateContainerSC>
          {/* <DateButtonSC>-</DateButtonSC> */}
          <DateScoreTextSC>Fecha: <span>{ props.date.getDate() }/{ props.date.getMonth() }/{ props.date.getFullYear() }</span></DateScoreTextSC>
          {/* <DateButtonSC>+</DateButtonSC> */}
        </DateContainerSC>
        <DateScoreTextSC>Puntuación:  <span>{ props.score } / { Object.keys(props.buttons).length }</span></DateScoreTextSC>
        <progress value={ props.score } max={Object.keys(props.buttons).length}></progress>
        </>
    )
}

export default MealsDateScore
