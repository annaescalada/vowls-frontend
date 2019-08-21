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
  width:20%;
  height: 35px;
  border-radius: 10px;
  margin: 2%;
`;

const DateContainerSC = styled.div`
  display:flex;
  align-items: center;
`;

function MealsDateScore(props) {
  console.log(props)
    return (
        <>
        <DateContainerSC>
          <DateButtonSC disabled={props.index === 0 ? true : false } className={props.index === 0 ? 'disabledButton' :null } onClick={props.handleBackClick}>{'<'}</DateButtonSC>
          <DateScoreTextSC>Fecha: <span>{ props.date.getDate() }/{ props.date.getMonth() }/{ props.date.getFullYear() }</span></DateScoreTextSC>
          <DateButtonSC disabled={props.index === props.lastIndex ? true : false }className={props.index === props.lastIndex ? 'disabledButton' :null } onClick={props.handleNextClick}>{'>'}</DateButtonSC>
        </DateContainerSC>
        <DateScoreTextSC>Puntuación:  <span>{ props.score } / { Object.keys(props.buttons).length }</span></DateScoreTextSC>
        <progress value={ props.score } max={Object.keys(props.buttons).length}></progress>
        </>
    )
}

export default MealsDateScore
