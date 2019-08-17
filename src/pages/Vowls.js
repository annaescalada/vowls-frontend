import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';
import VowlChart from '../components/VowlChart'
import SearchBar from '../components/SearchBar'
import foodService from '../services/food-service'
import {randomVowl} from '../helpers/randomVowl'
import { foodGroups, foodGroupToIcon, foodGroupToName} from '../helpers/foodConvert'
import styled from 'styled-components'

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
  margin-top:30px;
`;

const IngredientSC = styled.p`
  font-size:15px;
  padding:0;
`;


class Vowls extends Component {
  state ={
    search :'',
    isVowlShowing:false,
    isVowlLoading: false,
    isLoading: true,
    vowl: {},
    foods: [],
  } 

  handleSearchChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleVowlClick = (event) => {
    this.setState({
      isVowlLoading: true, 
      isVowlShowing:false
    });
    console.log('first', this.state)
    const generatedVowl = randomVowl(this.state.foods);
    console.log(generatedVowl);
    this.setState({ 
      vowl: generatedVowl,
    });
    console.log('here', this.state);
    setTimeout(() => 
      this.setState({
        isVowlLoading:false,
        isVowlShowing:true,
      }) , 1000)
  }

  componentDidMount() {
    foodService.getFoods()
    .then((foods) => {
      this.setState(foods)})
    .catch((error) => {
      console.log(error);
    });
    //vowlService get vowls from current user
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading, isVowlLoading, isVowlShowing, vowl } = this.state;
    console.log(this.state)
    return (
      <>
      <section>
        <>
          {!isLoading?
          <button onClick={this.handleVowlClick}>Generar vowl</button> : null}
          {isVowlLoading ? 
            <Loading text1='Generando un' span='vowl' text2='saludable, equilibrado, completo y delicioso!'></Loading> 
          : null }
          {isVowlShowing ?
            <>
              <SalsaSC src={this.state.vowl.salsa.img}></SalsaSC>
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
                {/* <p>{foodGroupToName(vowl.otherveg.group)}</p>
                <IngredientSC><span>{vowl.otherveg.name}</span></IngredientSC>
                <p>{foodGroupToName(vowl.salsa.group)}</p>
              <IngredientSC><span>{vowl.salsa.name}</span></IngredientSC> */}
              </IngredientContainerSC>
              <button className="reversed" onClick={this.handleVowlClick}>Guardar</button>
            </>
          : null }
          <h3>Mis vowls</h3>
            <SearchBar value={this.state.search} onChange={this.handleSearchChange}/>
          {!isLoading ?
          <>
          </>
          : <p>Cargando vowls...</p>}
        </>
      <div className='last'></div>
      </section>
      </>
      )
  }
}

export default withAuth(Vowls);
