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

    savedVowl: {}
  } 

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleVowlClick = () => {
    this.setState({
      isVowlLoading: true, 
      isVowlShowing:false,
      isSavedMessageShowing: false,
      isSavedVowlShowing:false,
    });
    const generatedVowl = randomVowl(this.state.foods);
    vowlsService.lastGeneratedVowl(generatedVowl)
    .then(() => {
      this.props.me();
      setTimeout(() => 
        this.setState({
          vowl: generatedVowl,
          isVowlLoading:false,
          isVowlShowing:true,
        }), 2000)
    })
    .catch( error => {
      console.log(error);
    })
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
        isVowlShowing:false,
        isSavedMessageShowing: true,
        name:'',
      })
    })
    .catch( error => {
      console.log(error);
    })
  }

  handleDeleteVowl = (vowlID) => {
    this.setState({
      isSavedVowlShowing:false,
    });
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
    if (this.props.user.lastGeneratedVowl) {
      this.setState({
        isVowlShowing:true,
        vowl: this.props.user.lastGeneratedVowl,
      })
    }
    this.setState({ 
      isLoading: false })
  }

  render() {
    const { user, isLoading, isVowlLoading, isVowlShowing, isSavedMessageShowing, isSavedVowlShowing, savedVowlShowing, vowl, search } = this.state;
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
            {user.vowls.map((vowl, index) => {
              return(
                <React.Fragment key={index}>
                  { vowl.name && vowl.name.includes(search)?
                  <VowlListCard vowl={vowl} handleDeleteVowl={this.handleDeleteVowl} handleCardClick={this.handleCardClick}></VowlListCard>
                  : null}
                </React.Fragment>
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
