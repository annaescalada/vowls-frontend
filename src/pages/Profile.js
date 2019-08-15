import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import ChangePassword from '../components/ChangePassword.js';
import styled from 'styled-components'
import { InputSC } from './NutriForm.js';

const DataContainerSC = styled.div`
  background-color: #c25c7824;
  border-radius: 10px;
  padding:6%;
  text-align:center;
`;

class Profile extends Component {
  state = {
    error:'',
    name: this.props.user.name,
    age: this.props.user.age,
    gender: this.props.user.gender,
    weight: this.props.user.weight,
    height: this.props.user.height,
    activity:this.props.user.activity,
    editing: false,
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const  { user } = this.props;
    const { name, age, gender, weight, height, activity, editing } = this.state;
    return (
      <div>
        <h3>Hola <span>{name},</span></h3>
        <DataContainerSC>
          <p>Índice de massa corporal (<b>IMC</b>):</p>
          <p>
            <span>{user.IMC} </span>
            {user.IMC < 18.5 ? 
            <span>(Infrapeso)</span> : null}
            {user.IMC > 18.5 || user.IMC <= 24.9 ? 
            <span>(Rango saludable)</span> : null}
            {user.IMC > 24.9 || user.IMC <= 29.9 ? 
            <span>(Sobrepeso)</span> : null}
            {user.IMC > 29.9 || user.IMC <= 34.9 ? 
            <span>(Obesidad grado I)</span> : null}
            {user.IMC > 34.9 || user.IMC <= 39.9 ? 
            <span>(Obesidad grado II)</span> : null}
            {user.IMC > 39.9 ? 
            <span>(Obesidad grado III)</span> : null}
          </p>
          <p>Gasto energético dario (<b>GED</b>):</p>
          <span>{user.GED} Kcal</span>
        </DataContainerSC>
        <p>Edad:</p>
          {editing?
          <InputSC id='age' type='text' name='age' value={age} onChange={this.handleChange}/>
          : <InputSC id='age' type='text' name='age' value={age} disabled/>}

        <p>Sexo:</p>
        <p>Peso:</p>
        <p>Altura:</p>
        <p>Nivel de actividad:</p>

        {/* <form>
        {formPage === 0 ?
        <fieldset>
        </fieldset> :null }

        {formPage === 1 ?
        <fieldset>
      
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
        </form> */}

        <ChangePassword></ChangePassword>
      </div>
    )
  }
}

export default withAuth(Profile);