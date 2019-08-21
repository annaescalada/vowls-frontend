import React from 'react'
import styled from 'styled-components'

const ExtraContainerSC = styled.div`
display: flex;
flex-direction:column;
align-items: center;
border-radius: 10px;
margin: 15px 0 20px 0;
padding:5%;
Xbackground: #5cc1a521;
transition: all 2s;
`;

const IconSC = styled.img`
  height:0;
  height:80px;
  width:auto;
  margin: 5%;
`;

const ExtraTextSC = styled.p`
    line-height: 20px;
`;

function Extra() {
    return (
        <ExtraContainerSC className='extra'>
            <ExtraTextSC>¡Felicidades!</ExtraTextSC>
            <ExtraTextSC><span>Hoy te has ganado un extra</span></ExtraTextSC>
            <IconSC src='./images/Food-icons/extra.png' alt="Cupcake icon"></IconSC>
        </ExtraContainerSC>
    )
}

export default Extra
