import React from 'react';
import styled from 'styled-components';

const LoadingImg = styled.img`
    width: 150px;
`

const LoadingIcon = styled.img`
    width: 50px;
    margin-bottom:0px;
`

const LoadingContainer = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    flex-direction:column;
`

const LoadingText = styled.p`
    display:inline;
    line-height:2em;
    margin-bottom: 20px;
    width:80%;
`

function Loading(props) {
    return (
        <LoadingContainer>
            <LoadingText>{props.text1}<span> {props.span} </span>{props.text2}</LoadingText>
            <LoadingIcon className='loading' src="./images/Menu-icons/loading.png"></LoadingIcon>
            <LoadingImg src="./images/Food-icons/Vowl.png" alt=""/>
        </LoadingContainer>
    )
}

export default Loading
