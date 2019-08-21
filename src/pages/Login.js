import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
import { processError } from '../helpers/processError'
import ImageBottom from '../components/ImageBottom';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error:'',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
    .then( () => {
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

  render() {
    const { username, password, error } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder='Correo electrónico' id='username' type='email' name='username' value={username} onChange={this.handleChange } required/>
          <input placeholder='Contraseña' id='password' type='password' name='password' value={password} onChange={this.handleChange} required/>
          <input type='submit' value='Iniciar sesión' />
        </form>

        {error? <p className='error'>{error}</p>: null}

        <p>Aún no te has registrado?
            <Link to={'/signup'}> Crear una cuenta</Link>
        </p>
        <ImageBottom></ImageBottom>
      </>
    )
  }
}

export default withAuth(Login);