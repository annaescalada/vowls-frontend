import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import ChangePassword, { CancelSC } from '../components/ChangePassword.js';
import styled from 'styled-components'
import { InputSC } from './NutriForm.js';
import {updateInfo} from '../helpers/updateInfo';
import {convertActivity, convertGender} from '../helpers/convertInfoProfile';
import { processError } from '../helpers/processError'
import IMC from '../components/IMC.js';

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
    const {GED, IMC, portion} = updateInfo(age, gender, weight, height, activity);
    this.props.update({ name, age, gender, weight, height, activity, GED, IMC, portion })
    .then( () => {
      this.setState ({editing: false});
    })
    .catch( error => {
      this.setState ({error: processError(error.response.status)});
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

  render() {
    const  { user } = this.props;
    const { name, age, gender, weight, height, activity, editing, error } = this.state;
    return (
      <div>
        <h3>Hola <span>{name},</span></h3>
        <IMC user={user}/>
        <p>Edad:</p>
          {editing?
          <InputSC id='age' type='text' name='age' value={age} onChange={this.handleChange}/>
          : <InputSC id='age' type='text' name='age' value={age} disabled/>}
        <p>Sexo:</p>
          {editing?
          <ActivitySelectSC name="gender" onChange={this.handleChange}>
          <option defaultValue disabled value={convertGender(gender)}>{convertGender(gender)}</option>
          <option  value='male'>Hombre</option>
          <option value='female'>Mujer</option>
        </ActivitySelectSC>
          : <InputSC id='gender' type='text' name='gender' value={convertGender(gender)} disabled/>}
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
        <ActivitySelectSC value={activity} name="activity" onChange={this.handleChange}>
          <option value={1.4}>Sedentario</option>
          <option value={1.6}>Leve</option>
          <option value={2}>Moderado</option>
          <option value={2.4}>Muy activo</option>
        </ActivitySelectSC>
        : <InputSC id='activity' type='text' name='activity' value={convertActivity(activity)} disabled/>}

          {editing ? <input onClick={this.handleFormSubmit} type='submit' value='Guardar' /> : null}
          {!editing? <button onClick={this.handleEditButton}>Editar información</button> :null}
          {error? <p className='error'>{error}</p>: null}
          {editing ? <CancelSC onClick= {this.handleCancel}>Cancelar</CancelSC> :null}
        <hr></hr>
        <ChangePassword></ChangePassword>
        <div className='last'></div>
      </div>
    )
  }
}

export default withAuth(Profile);