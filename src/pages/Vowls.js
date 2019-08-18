import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import foodService from '../services/food-service';
import {randomVowl} from '../helpers/randomVowl';
import VowlDetails from '../components/VowlDetails';
import {InputSC} from '../pages/NutriForm';
import vowlsService from '../services/vowls-service';
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


class Vowls extends Component {
  state ={
    search :'',
    
    isVowlShowing:false,
    isVowlLoading: false,
    isLoading: true,
    isSavedMessageShowing:false,
    
    name:'',
    vowl: {},

    foods: [],

    savedVowl: {},

    error:''
  } 

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleVowlClick = (event) => {
    this.setState({
      isVowlLoading: true, 
      isVowlShowing:false,
      isSavedMessageShowing: false,
    });
    const generatedVowl = randomVowl(this.state.foods);
    this.setState({ 
      vowl: generatedVowl,
    });
    setTimeout(() => 
      this.setState({
        isVowlLoading:false,
        isVowlShowing:true,
      }) , 1000)
  }

  handleSaveVowlClick = () => {
    let { name, vowl} = this.state;
    if (!name.length) { name = 'Random Vowl'};
    const description = `${vowl.cereal.name}, ${vowl.protein.name}, ${vowl.tuber.name}, ${vowl.cruciferous.name}, ${vowl.greens.name}, ${vowl.othervegs.name}, ${vowl.salsa.name}...`
    const newSavedVowl = { name, description, cereal: vowl.cereal, protein: vowl.protein, tuber: vowl.tuber, cruciferous: vowl.cruciferous, greens: vowl.greens, othervegs: vowl.othervegs, salsa: vowl.salsa }
    vowlsService.saveVowl(newSavedVowl)
    .then((response) => response)
    .catch( error => {
      this.setState ({error: 'Ha habido un error, por favor inténtalo de nuevo.'});
      console.log(error);
    })

    this.setState({
      isVowlShowing:false,
      isSavedMessageShowing: true,
      name:'',
    })
  }

  handleDeleteVowl = () => {

  }

  componentDidMount() {
    foodService.getFoods()
    .then((foods) => {
      this.setState(foods)
    })
    .catch((error) => {
      console.log(error);
    });
    //vowlService get vowls from current user
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading, isVowlLoading, isVowlShowing, isSavedMessageShowing, vowl, search } = this.state;
    console.log(this.props)
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
              <VowlDetails vowl={vowl}></VowlDetails>
              <InputSC placeholder='Nombre del vowl' id='name' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
              {this.state.error? <p className='error'>{this.state.error}</p>: null}
              <button className="reversed" onClick={this.handleSaveVowlClick}>Guardar</button>
            </>
          : null }
          {isSavedMessageShowing ?
            <>
              <p>Vowl guardado correctamente!</p>
            </>
          : null}
          <h3>Mis vowls</h3>
            <SearchBar value={this.state.search} onChange={this.handleChange}/>
          {!isLoading ?
          <>
            {this.props.user.vowls.map(vowl => {
              return(
                <>
                  {vowl.name.includes(search) ?
                  <VowlListCardSC>
                    <VowlIconSC src='./images/Food-icons/Vowl.png'/>
                    <VowlDetailsContainerSC>
                      <p>{vowl.name}</p>
                      <VowlDescriptionSC><span>{vowl.description}</span></VowlDescriptionSC>
                    </VowlDetailsContainerSC>
                    <DeleteIconSC onClick={this.handleDeleteVowl} src='./images/Menu-icons/delete.png'/>
                  </VowlListCardSC>
                  : null}
                </>

              )
            })}
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
