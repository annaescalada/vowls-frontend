import React from 'react'
import styled from 'styled-components'

const DataContainerSC = styled.div`
  background-color: #c25c7824;
  border-radius: 10px;
  padding:6%;
  text-align:center;
`;

function IMC(props) {
    return (
        <DataContainerSC>
          <p>Índice de masa corporal (<b>IMC</b>):</p>
          <p>
            <span>{props.user.IMC} </span>
            {props.user.IMC <= 18.5 ? 
            <span>(Infrapeso)</span> : null}
            {props.user.IMC > 18.5 && props.user.IMC <= 24.9 ? 
            <span>(Rango saludable)</span> : null}
            {props.user.IMC > 24.9 && props.user.IMC <= 29.9 ? 
            <span>(Sobrepeso)</span> : null}
            {props.user.IMC > 29.9 && props.user.IMC <= 34.9 ? 
            <span>(Obesidad de grado I)</span> : null}
            {props.user.IMC > 34.9 && props.user.IMC <= 39.9 ? 
            <span>(Obesidad de grado II)</span> : null}
            {props.user.IMC > 39.9 ? 
            <span>(Obesidad de grado III)</span> : null}
          </p>
          <p>Gasto energético dario (<b>GED</b>):</p>
          <span>{props.user.GED} Kcal</span>
        </DataContainerSC>
    )
}

export default IMC
