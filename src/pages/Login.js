import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
import styled from 'styled-components'

export const ImgContainer = styled.div`
  position: relative;
  width:100%;
  height:300px;
  overflow: hidden;
  display:flex;
`


export const Vowl1 = styled.img`
  position: absolute;
  top:50px
`

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
    .then( (user) => {
      console.log(user)
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
          <input placeholder='Correo electrónico' id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <input placeholder='Contraseña' id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Iniciar sesión' />
        </form>

        {error? <p className='error'>{error}</p>: null}

        <p>Aún no te has registrado?
            <Link to={'/signup'}> Crear una cuenta</Link>
        </p>
        <ImgContainer>
          <Vowl1 src='images/vowl1.jpg'/>
        </ImgContainer>
      </>
    )
  }
}

export default withAuth(Login);