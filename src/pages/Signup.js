import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';
import { processError } from '../helpers/processError'
import ImageBottom from '../components/ImageBottom.js';

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
        this.setState ({error: processError(error.response.status)});
        console.log(error.response.status);
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
          <input placeholder='Correo electrónico' id='username' type='email' name='username' value={username} onChange={this.handleChange} required/>
          <input placeholder='Contraseña' id='password' type='password' name='password' value={password} onChange={this.handleChange} required/>
          <input type='submit' value='Crear una cuenta' />
        </form>

        {error? <p className='error'>{error}</p>: null}

        <p>Ya tienes una cuenta? 
          <Link to={'/'}> Iniciar sesión</Link>
        </p>
        <ImageBottom></ImageBottom>
      </>
    )
  }
}

export default withAuth(Signup);