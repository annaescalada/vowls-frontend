import React from 'react'
import styled from 'styled-components'
import VowlChart from '../components/VowlChart'
import { foodGroupToName} from '../helpers/foodConvert'


const SalsaSC = styled.img`
  margin-top:20px;
  width: 100px!important;
  height: 100px!important;
  border-radius:50%;
  position:relative;
  left:65%;
  border: white 3px solid;
  margin-bottom:-10px;
  box-shadow: 5px -2px 15px -2px rgb(158, 158, 158);
`;

const ChartContainerSC = styled.div`
  border-radius:50%;
  background:white;
  padding:1px;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 280px;
  width: 280px!important;
  box-shadow: 5px -2px 15px -2px rgb(158, 158, 158);
`;

const IngredientContainerSC = styled.div`
  margin:20px 0 20px 0;
  background: #c25c7817;
  border-radius: 25px;
  padding: 4%;
`;

const IngredientSC = styled.p`
  font-size:15px;
  padding:0;
`;

function VowlDetails(props) {
    const { vowl } = props;
    return (
        <div>
        <SalsaSC src={vowl.salsa.img}></SalsaSC>
        <ChartContainerSC>
            <VowlChart cereal={vowl.cereal} protein={vowl.protein} tuber={vowl.tuber} cruciferous={vowl.cruciferous} greens={vowl.greens} othervegs={vowl.othervegs} salsa={vowl.salsa}></VowlChart> 
            </ChartContainerSC>
            <IngredientContainerSC>
            <p>{foodGroupToName(vowl.cereal.group)}</p>
            <IngredientSC><span>{vowl.cereal.name}</span></IngredientSC>
            <p>{foodGroupToName(vowl.protein.group)}</p>
            <IngredientSC><span>{vowl.protein.name}</span></IngredientSC>
            <p>{foodGroupToName(vowl.tuber.group)}</p>
            <IngredientSC><span>{vowl.tuber.name}</span></IngredientSC>
            <p>{foodGroupToName(vowl.cruciferous.group)}</p>
            <IngredientSC><span>{vowl.cruciferous.name}</span></IngredientSC>
            <p>{foodGroupToName(vowl.greens.group)}</p>
            <IngredientSC><span>{vowl.greens.name}</span></IngredientSC>
            <p>{foodGroupToName(vowl.othervegs.group)}</p>
            <IngredientSC><span>{vowl.othervegs.name}</span></IngredientSC>
            <p>Salsa</p>
            <IngredientSC><span>{vowl.salsa.name}</span></IngredientSC>
            </IngredientContainerSC>
        </div>
    )
}

export default VowlDetails
