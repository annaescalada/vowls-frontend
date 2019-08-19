import React from 'react'
import styled from 'styled-components'

const LogoText = styled.p`
    font-family: 'Concert One', cursive;
    font-size:3.2em;
    text-transform: uppercase;
    color: #5cc1a5;
    text-align: center;
    margin:6% 0 0 0;
    padding:0;
    line-height:0.8em;
    letter-spacing:-2.5px;
`;

const SubText = styled.p`
    font-size:1em;
    color: #707070;
    text-align: center;
    padding:0;
    margin-top:3%;
    margin-bottom: 20%;
`;



function Logo() {
    return (
        <div>
            <LogoText>Vowls</LogoText>
            <SubText>veggie bowls</SubText>
        </div>
    )
}

export default Logo
