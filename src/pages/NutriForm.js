import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import styled from 'styled-components'
import ProgressNutriBar from '../components/ProgressNutriBar.js';

const InputSC = styled.input`
  color: #c25c78!important;
`;

const ImgContainer2SC = styled.div`
  position: relative;
  left: -120px;
  height: 240px;
`

const Vowl2 = styled.img`
  height: 100%;
  transform: rotate(180deg);
`

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

class NutriForm extends Component {
  state = {
    formPage: 0,
    error:'',
    name: '',
    age: '',
    gender: 'female',
    weight: '',
    height: '',
    activity:1,
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
    const { name, age, gender, weight, height, activity } = this.state

    // Cálculo IMC
    const IMC = ((weight / (height * height)) * 10000).toFixed(2);

    // Cálculo GED
    let GED = 0;
    if (gender === 'female') {
      GED = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity).toFixed(0)
    } else {
      GED =( ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity).toFixed(0);
    }

    // Cálculo portion
    let portion = 1;
    if (GED >= 2100) {
        portion = 1.5;
    } else if (GED >= 3000) {
        portion = 2;
    }

    this.props.update({ name, age, gender, weight, height, activity, GED, IMC, portion })
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
      <ProgressNutriBar num={formPage}/>
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
          {!activity.length || activity === 1.4 ?
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
        </form>

        <ImgContainer2SC>
          <Vowl2 src='images/vowl2.jpg'/>
        </ImgContainer2SC>
      </>
    )
  }
}

export default withAuth(NutriForm);