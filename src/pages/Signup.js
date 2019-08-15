import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';
import styled from 'styled-components'
import { ImgContainer, Vowl1 } from './Login.js';

const ErrorSC = styled.p`
  color: red
`;

class Signup extends Component {

  state = {
    username: '',
    password: '',
    error:'',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            password: '',
        });
      })
      .catch( error => {
        this.setState ({error: 'Ha habido un error, por favor inténtalo de nuevo.'});
        console.log(error);
      })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder='Correo electrónico' required id='username' type='email' name='username' value={username} onChange={this.handleChange}/>
          <input placeholder='Contraseña' id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Crear una cuenta' />
        </form>

        {error? <p className='error'>{error}</p>: null}

        <p>Ya tienes una cuenta? 
          <Link to={'/'}> Iniciar sesión</Link>
        </p>
        <ImgContainer>
          <Vowl1 src='images/vowl1.jpg'/>
        </ImgContainer>
      </>
    )
  }
}

export default withAuth(Signup);