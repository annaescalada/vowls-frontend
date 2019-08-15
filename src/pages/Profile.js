import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import ChangePassword, { CancelSC } from '../components/ChangePassword.js';
import styled from 'styled-components'
import { InputSC } from './NutriForm.js';

const DataContainerSC = styled.div`
  background-color: #c25c7824;
  border-radius: 10px;
  padding:6%;
  text-align:center;
`;

const ActivitySelectSC = styled.select`
  color: #c25c78!important;
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
      console.log(user);
      this.setState ({editing: false});
    })
    .catch( error => {
      this.setState ({error: 'Asegúrate de haber rellenado todos los campos e inténtalo de nuevo.'});
      console.log(error);
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleEditButton = () => {
      this.setState ({
          editing: true,
          error:''
      });
  }

  handleCancel = () => {
      this.setState({
          editing:false,
          error:'',
          name: this.props.user.name,
          age: this.props.user.age,
          gender: this.props.user.gender,
          weight: this.props.user.weight,
          height: this.props.user.height,
          activity:this.props.user.activity,
      });
  }

  convertActivity = (level) => {
    switch (level) {
      case '1.4':
        return 'Sedentario';
        break;
      case '1.6':
        return 'Leve';
        break;
      case '2':
        return 'Moderado';
        break;
      case '2.4':
        return 'Muy activo';
        break;
      default:
        return 'Sedentario';
        break;
    }
  }

  convertGender = (sex) => {
    switch (sex) {
      case 'male':
        return 'Hombre';
        break;
      case 'female':
        return 'Mujer';
        break;
      default:
        return 'Mujer';
        break;
    }
  }



  render() {
    const  { user } = this.props;
    const { name, age, gender, weight, height, activity, editing, error } = this.state;
    console.log(this.state);
    return (
      <div>
        <h3>Hola <span>{name},</span></h3>
        <DataContainerSC>
          <p>Índice de massa corporal (<b>IMC</b>):</p>
          <p>
            <span>{user.IMC} </span>
            {user.IMC <= 18.5 ? 
            <span>(Infrapeso)</span> : null}
            {user.IMC > 18.5 && user.IMC <= 24.9 ? 
            <span>(Rango saludable)</span> : null}
            {user.IMC > 24.9 && user.IMC <= 29.9 ? 
            <span>(Sobrepeso)</span> : null}
            {user.IMC > 29.9 && user.IMC <= 34.9 ? 
            <span>(Obesidad de grado I)</span> : null}
            {user.IMC > 34.9 && user.IMC <= 39.9 ? 
            <span>(Obesidad de grado II)</span> : null}
            {user.IMC > 39.9 ? 
            <span>(Obesidad de grado III)</span> : null}
          </p>
          <p>Gasto energético dario (<b>GED</b>):</p>
          <span>{user.GED} Kcal</span>
        </DataContainerSC>
        <p>Edad:</p>
          {editing?
          <InputSC id='age' type='text' name='age' value={age} onChange={this.handleChange}/>
          : <InputSC id='age' type='text' name='age' value={age} disabled/>}
        <p>Sexo:</p>
          {editing?
          <ActivitySelectSC name="gender" onChange={this.handleChange}>
          <option selected disabled value={this.convertGender(gender)}>{this.convertGender(gender)}</option>
          <option  value='male'>Hombre</option>
          <option value='female'>Mujer</option>
        </ActivitySelectSC>
          : <InputSC id='gender' type='text' name='gender' value={this.convertGender(gender)} disabled/>}
        <p>Peso (Kg):</p>
          {editing?
          <InputSC id='weight' type='text' name='weight' value={weight} onChange={this.handleChange}/>
          : <InputSC id='weight' type='text' name='weight' value={weight} disabled/>}
        <p>Altura (cm):</p>
          {editing?
          <InputSC id='height' type='text' name='height' value={height} onChange={this.handleChange}/>
          : <InputSC id='height' type='text' name='height' value={height} disabled/>}
        <p>Nivel de actividad:</p>
        {editing? 
        <ActivitySelectSC name="activity" onChange={this.handleChange}>
          <option selected disabled>{this.convertActivity(activity)}</option>
          <option  value={1.4}>Sedentario</option>
          <option value={1.6}>Leve</option>
          <option value={2}>Moderado</option>
          <option value={2.4}>Muy activo</option>
        </ActivitySelectSC>
        : <InputSC id='activity' type='text' name='activity' value={this.convertActivity(activity)} disabled/>}

          {editing ? <input onClick={this.handleFormSubmit} type='submit' value='Guardar' /> : null}
          {!editing? <button onClick={this.handleEditButton}>Editar información</button> :null}
          {error? <p className='error'>{error}</p>: null}
          {editing ? <CancelSC onClick= {this.handleCancel}>Cancelar</CancelSC> :null}
        <hr></hr>
        <ChangePassword></ChangePassword>
      </div>
    )
  }
}

export default withAuth(Profile);