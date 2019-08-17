import React from 'react'
import styled from 'styled-components'

const ProgressContainerSC = styled.div`
    height;100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 20px;
`;


const RoundFullSC = styled.div`
    height: 15px;
    width:25px!important;
    border: 1px solid #c25c78;
    border-radius:100%;
    background-color:#c25c78;
`;

const RoundEmtySC = styled.div`
    height: 15px;
    width:25px!important;
    border: 1px solid #c25c78;
    border-radius:100%;
`;

const FlatSC = styled.div`
    background-color: #c25c78;
    height: 6px;
    width:100%;
`;

function ProgressNutriBar(props) {
    return (
        <ProgressContainerSC>
            <RoundFullSC />
            <FlatSC/>
            {props.num >= 1 ?
            <RoundFullSC/> : <RoundEmtySC/>}
            <FlatSC/>
            {props.num >= 2 ?
            <RoundFullSC/> : <RoundEmtySC/>}
        </ProgressContainerSC>
    )
}

export default ProgressNutriBar
