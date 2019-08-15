import React from 'react';
import styled from 'styled-components';

const LoadingImg = styled.img`
    width: 200px;
`

const LoadingContainer = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    flex-direction:column;
`

const LoadingText = styled.p`
    font-size:25px!important;
    display:inline;
    line-height:2em;
    margin-bottom: 100px;
    width:80%;
`

function Loading(props) {
    return (
        <LoadingContainer>
            <LoadingText>{props.text1}<span> {props.span} </span>{props.text2}</LoadingText>
            <LoadingImg src="./images/Food-icons/Vowl.png" alt=""/>
        </LoadingContainer>
    )
}

export default Loading
