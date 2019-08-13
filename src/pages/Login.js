import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';

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
      this.setState ({error: 'Ha ocurrido un error, por favor inténtalo de nuevo.'});
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
          <label htmlFor='username' >Username:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Login' />
        </form>

        {error? <p>{error}</p>: null}

        <p>Aún no te has registrado?
            <Link to={'/signup'}> Crear una cuenta</Link>
        </p>
      </>
    )
  }
}

export default withAuth(Login);