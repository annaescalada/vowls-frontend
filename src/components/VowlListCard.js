import React from 'react'
import styled from 'styled-components'

const VowlListCardSC = styled.div`
  display:flex;
  align-items: flex-start;
  border-bottom: 1px solid #d6d6d6;
  margin-top: 20px;
  padding-bottom: 10px;
`;
const VowlIconSC = styled.img`
  width: 50px!important;
  height:auto;
  margin-right:10px;
`;

const VowlDetailsContainerSC = styled.div`
  display:flex;
  flex-direction:column;
`;

const VowlDescriptionSC = styled.p`
  font-size: 15px;
  line-height: 20px;
`;

const DeleteIconSC = styled.img`
  width: 20px!important;
  height:auto;
  padding-top: 10px;
`;

function VowlListCard(props) {
    return (
        <>
            <VowlListCardSC key={props.vowl._id}>
            <VowlIconSC onClick={() => props.handleCardClick(props.vowl._id)} src='./images/Food-icons/Vowl.png'/>
            <VowlDetailsContainerSC onClick={() => props.handleCardClick(props.vowl._id)}>
                <p>{props.vowl.name}</p>
                <VowlDescriptionSC><span>{props.vowl.description}</span></VowlDescriptionSC>
            </VowlDetailsContainerSC>
            <DeleteIconSC onClick={() => props.handleDeleteVowl(props.vowl._id)} src='./images/Menu-icons/delete.png'/>
            </VowlListCardSC>
        </>
    )
}

export default VowlListCard
