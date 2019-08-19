import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import foodService from '../services/food-service';
import vowlsService from '../services/vowls-service';
import {randomVowl} from '../helpers/randomVowl';
import VowlDetails from '../components/VowlDetails';
import VowlListCard from '../components/VowlListCard';
import {InputSC} from '../pages/NutriForm';
import styled from 'styled-components'
import { processError } from '../helpers/processError'

const SavedVowlTitleSC = styled.h3`
  font-weight: 600;
  text-align:center;
`;

class Vowls extends Component {
  state ={
    user: this.props.user,

    search :'',
    
    isLoading: true,
    isVowlShowing:false,
    isVowlLoading: false,
    isSavedMessageShowing:false,
    isSavedVowlShowing:false,
    savedVowlShowing: {},

    
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
      isSavedVowlShowing:false,
    });
    const generatedVowl = randomVowl(this.state.foods);
    this.setState({ 
      vowl: generatedVowl,
    });
    setTimeout(() => 
      this.setState({
        isVowlLoading:false,
        isVowlShowing:true,
      }), 3000)
  }

  handleSaveVowlClick = () => {
    let { name, vowl} = this.state;
    if (!name.length) { name = 'Random Vowl'};
    const description = `${vowl.cereal.name}, ${vowl.protein.name}, ${vowl.tuber.name}, ${vowl.cruciferous.name}, ${vowl.greens.name}, ${vowl.othervegs.name}, ${vowl.salsa.name}...`
    const newSavedVowl = { name, description, cereal: vowl.cereal, protein: vowl.protein, tuber: vowl.tuber, cruciferous: vowl.cruciferous, greens: vowl.greens, othervegs: vowl.othervegs, salsa: vowl.salsa }
    vowlsService.saveVowl(newSavedVowl)
    .then(({updatedUser}) => {
      this.setState({
        user: updatedUser,
      })
    })
    .catch( error => {
      this.setState ({error: processError(error.response.status)});
      console.log(error);
    })

    this.setState({
      isVowlShowing:false,
      isSavedMessageShowing: true,
      name:'',
    })
  }

  handleDeleteVowl = (vowlID) => {
    this.setState({
      isSavedVowlShowing:false,
    });
    console.log(vowlID);
    vowlsService.deleteVowl(vowlID)
    .then(({updatedUser}) => {
      this.setState({
        user: updatedUser,
        isSavedVowlShowing:false,
      })
    })
    .catch( error => {
      console.log(error);
    });
  }

  handleCardClick = (vowlID) => {
    this.setState ({
      isSavedVowlShowing: false,
    })
    vowlsService.getOne(vowlID)
    .then(({vowl}) => {
      console.log(vowl);
      this.setState({
        isVowlShowing:false,
        isSavedMessageShowing:false,
        isSavedVowlShowing:true,
        savedVowlShowing: vowl,
      })
    })
    .catch( error => {
      console.log(error);
    })
  }

  componentDidMount() {
    foodService.getFoods()
    .then((foods) => {
      this.setState(foods)
    })
    .catch((error) => {
      console.log(error);
    });
    this.setState({ 
      isLoading: false })
  }

  render() {
    const { user, isLoading, isVowlLoading, isVowlShowing, isSavedMessageShowing, isSavedVowlShowing, savedVowlShowing, vowl, search } = this.state;
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
          {isSavedVowlShowing ?
            <>
              <SavedVowlTitleSC>{savedVowlShowing.name}</SavedVowlTitleSC>
              <VowlDetails vowl={savedVowlShowing}></VowlDetails>
            </>
          : null }
          {isSavedMessageShowing ?
            <>
              <p className='success'>✓ Tu Vowl se ha guardado correctamente!</p>
            </>
          : null}
          <h3>Mis vowls</h3>
            <SearchBar value={this.state.search} onChange={this.handleChange}/>
          {!isLoading ?
          <>
            {user.vowls.map(vowl => {
              return(
                <>
                  { vowl.name && vowl.name.includes(search)?
                  <VowlListCard vowl={vowl} handleDeleteVowl={this.handleDeleteVowl} handleCardClick={this.handleCardClick}></VowlListCard>
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
