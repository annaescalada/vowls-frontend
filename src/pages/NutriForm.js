import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import styled from 'styled-components'

const InputSC = styled.input`
  color: #c25c78!important;
`;

const ImgContainer2SC = styled.div`
  position: relative;
  left:-100px;
  height: 200px;
  overflow: hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  bottom:0;
`

const NutriTitleSC = styled.p `
  font-weight: 600;
`
const Vowl2 = styled.img`
  Xposition:absolute;
  Xwidth: 100%;
  height: 100%;
  transform: rotate(180deg);
`

const GenderSC = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  align-content:center;
`

const ActivitySC = styled.div`
  display:flex;
  flex-direction:column;

`

const FieldsetSC = styled.fieldset`
  display:flex;
  flex-directon_column;
`

class NutriForm extends Component {
  state = {
    formPage: 0,
    error:'',
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    activity:'',
  }

  handleBack = (event) => {
    event.preventDefault();
    const newFormPage = this.state.formPage - 1
    this.setState({
      formPage: newFormPage,
      error:'',
  })
  }
  
  handleNext = (event) => {
    event.preventDefault();
    const newFormPage = this.state.formPage + 1
    this.setState({
      formPage: newFormPage,
      error:'',
  })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      error:'',
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
    .then( (user) => {
      console.log(user)
    })
    .catch( error => {
      this.setState ({error: 'Asegúrate de haber rellenado todos los campos e inténtalo de nuevo.'});
      console.log(error);
    })
  }

  render() {
    const {formPage, error, name, age, gender, weight, height, activity} = this.state;
    console.log(formPage, name, age, gender, weight, height, activity);
    return (
      <>
      <form action="">
        {formPage === 0 ?
        <fieldset>
          <NutriTitleSC>Cómo te llamas?</NutriTitleSC>
          <InputSC placeholder='Tu nombre' id='name' type='text' name='name' value={name} onChange={this.handleChange}/>
          <NutriTitleSC>Qué edad tienes?</NutriTitleSC>
          <InputSC placeholder='Tu edad' id='age' type='text' name='age' value={age} onChange={this.handleChange}/>
        </fieldset> :null }

        {formPage === 1 ?
        <fieldset>
          <NutriTitleSC>Cuál es tu género?</NutriTitleSC>
          <GenderSC>
          {gender.length ?
          <input hidden id='genderFemale' type='radio' name='gender' value='Mujer' onChange={this.handleChange}/>
          : <input hidden id='genderFemale' type='radio' name='gender' value='Mujer' onChange={this.handleChange} checked/>}
          <label htmlFor='genderFemale' onChange={console.log('clicked')}>
            Mujer
          </label>
            <input hidden id='genderMale' type='radio' name='gender' value='Hombre' onChange={this.handleChange}/>
          <label htmlFor='genderMale'>
            Hombre
          </label>
          </GenderSC>
          <NutriTitleSC>Cuánto pesas? (Kg)</NutriTitleSC>
          <InputSC placeholder='60' id='weight' type='number' name='weight' value={weight} onChange={this.handleChange}/>
          <NutriTitleSC>Cuánto mides? (cm)</NutriTitleSC>
          <InputSC placeholder='160' id='height' type='number' name='height' value={height} onChange={this.handleChange}/>
        </fieldset> :null }

        {formPage === 2 ?
        <FieldsetSC>
          <NutriTitleSC>Cuál es tu nivel de actividad física diaria?</NutriTitleSC>
          {activity.length ?
          <InputSC hidden id='activity1' type='radio' name='activity' value='1,5' onChange={this.handleChange}/> 
          : <InputSC hidden id='activity1' type='radio' name='activity' value='1,5' onChange={this.handleChange} checked/>}
          <label htmlFor='activity1'>
          Sedentario
          </label>
          <InputSC hidden id='activity2' type='radio' name='activity' value='1,8' onChange={this.handleChange}/>
          <label htmlFor='activity2'>
          Leve
          </label>
          <InputSC hidden id='activity3' type='radio' name='activity' value='2' onChange={this.handleChange}/>
          <label htmlFor='activity3'>
          Moderado
          </label>
          <InputSC hidden id='activity4' type='radio' name='activity' value='2,5' onChange={this.handleChange}/>
          <label htmlFor='activity4'>
          Muy activo
          </label>
        </FieldsetSC> : null}

          {error? <p className='error'>{error}</p>: null}

          {formPage < 2 ? <button onClick={this.handleNext}>Siguiente ></button> : null }
          {formPage === 2 ? <button type='submit' onClick={this.handleFormSubmit}>Enviar</button> : null }
          {formPage > 0 ? <button className='reversed' onClick={this.handleBack}>Atrás</button> : null }
        </form>

        <ImgContainer2SC>
          <Vowl2 src='images/vowl2.jpg'/>
        </ImgContainer2SC>
      </>
    )
  }
}

export default withAuth(NutriForm);