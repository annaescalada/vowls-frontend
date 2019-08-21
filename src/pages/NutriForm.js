import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import styled from 'styled-components'
import ProgressNutriBar from '../components/ProgressNutriBar.js';
import {updateInfo} from '../helpers/updateInfo'

 export const InputSC = styled.input`
  color: #c25c78!important;
`;

const NutriTitleSC = styled.p `
  font-weight: 600;
`

const GenderSC = styled.div`
  display:flex;
  justify-content: space-between;
  width:100%;
`

const FieldsetSC = styled.fieldset`
  display:flex;
  flex-directon_column;
`

const ImgContainerSC = styled.div`
    display:flex;
    margin-top: 30px;
    align-items:center;
    text-align:center;
    flex-direction:column;
`
const ImgSC = styled.img`
    width: 120px;
`

class NutriForm extends Component {
  state = {
    formPage: 0,
    error:'',
    name: '',
    age: '',
    gender: 'female',
    weight: '',
    height: '',
    activity:1.4,
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
    const { name, age, gender, weight, height, activity } = this.state;
    const {GED, IMC, portion} = updateInfo(age, gender, weight, height, activity);
    this.props.update({ name, age, gender, weight, height, activity, GED, IMC, portion })
    .then( (user) => {
      console.log('nutriform completed')
    })
    .catch( error => {
      this.setState ({error: 'Asegúrate de haber rellenado todos los campos e inténtalo de nuevo.'});
      console.log(error);
    })
  }

  render() {
    const {formPage, error, name, age, gender, weight, height, activity} = this.state;
    return (
      <>
      <ProgressNutriBar num={formPage}/>
      <form>
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
          {!gender.length || gender === 'female' ?
          <input hidden id='genderFemale' type='radio' name='gender' value='female' onChange={this.handleChange} checked/>
          : <input hidden id='genderFemale' type='radio' name='gender' value='female' onChange={this.handleChange}/>
          }
          <label htmlFor='genderFemale'>
            Mujer
          </label>
          {gender ==='male' ?
            <input hidden id='genderMale' type='radio' name='gender' value='male' onChange={this.handleChange} checked/>
            :<input hidden id='genderMale' type='radio' name='gender' value='male' onChange={this.handleChange}/>
          } 
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
          <NutriTitleSC>Cuál es tu nivel de actividad física?</NutriTitleSC>
          {!activity.length || activity === '1.4' ?
            <InputSC hidden id='activity1' type='radio' name='activity' value='1.4' onChange={this.handleChange} checked/> 
            : <InputSC hidden id='activity1' type='radio' name='activity' value='1.4' onChange={this.handleChange}/>
          }
          <label htmlFor='activity1'>
          Sedentario
          </label>
          {activity === '1.6' ?
            <InputSC hidden id='activity2' type='radio' name='activity' value='1.6' onChange={this.handleChange} checked/>
            :<InputSC hidden id='activity2' type='radio' name='activity' value='1.6' onChange={this.handleChange}/>
          }
          <label htmlFor='activity2'>
          Leve
          </label>
          {activity === '2' ?
            <InputSC hidden id='activity3' type='radio' name='activity' value='2' onChange={this.handleChange} checked/>
            :<InputSC hidden id='activity3' type='radio' name='activity' value='2' onChange={this.handleChange}/>
          }
          <label htmlFor='activity3'>
          Moderado
          </label>
          {activity === '2.4' ?
            <InputSC hidden id='activity4' type='radio' name='activity' value='2.4' onChange={this.handleChange} checked/>
            :<InputSC hidden id='activity4' type='radio' name='activity' value='2.4' onChange={this.handleChange}/>
          }
          <label htmlFor='activity4'>
          Muy activo
          </label>
        </FieldsetSC> : null}

          {error? <p className='error'>{error}</p>: null}

          {formPage < 2 ? <button onClick={this.handleNext}>Siguiente ></button> : null }
          {formPage === 2 ? <button type='submit' onClick={this.handleFormSubmit}>Enviar</button> : null }
          {formPage > 0 ? <button className='reversed' onClick={this.handleBack}>Atrás</button> : null }
          <ImgContainerSC>
          <ImgSC src="./images/Food-icons/Vowl.png" alt=""/>
          </ImgContainerSC>
        </form>

      </>
    )
  }
}

export default withAuth(NutriForm);