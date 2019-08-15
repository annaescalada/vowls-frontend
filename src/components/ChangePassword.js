import React, { Component } from 'react'
import withAuth from '../components/withAuth';
import styled from 'styled-components'

const CancelSC = styled.p`
  text-align: center;
`

class ChangePassword extends Component {
    state = {
        username: this.props.user.email,
        password: '********'
,       newPassword: '',
        editing: false,
        error: '',
      }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        const { newPassword } = this.state
    
        this.props.changePassword({ password: newPassword})
        .then((user) => {
          this.setState({editing:false})
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

      handleEditPassword = () => {
          this.setState ({
              editing: true
          });
      }

      handleCancel = () => {
          this.setState({
              editing:false
          });
      }
    
      render() {
        const { username, password, newPassword, editing, error } = this.state;
        return (
          <>
            <form onSubmit={this.handleFormSubmit}>
              <input id='username' type='text' name='username' value={username} onChange={this.handleChange} disabled/>
              {editing ?
              <input id='newPassword' type='password' name='newPassword' value={newPassword} onChange={this.handleChange}/> :
              <input id='password' type='password' name='password' value={password} onChange={this.handleChange} disabled={true} />
              }
              {editing ? <input type='submit' value='Guardar' /> : null}
            </form>
            {!editing? <button onClick={this.handleEditPassword}>Editar contraseña</button> :null}
            {error? <p className='error'>{error}</p>: null}
            {editing ? <CancelSC onClick= {this.handleCancel}>Cancelar</CancelSC> :null}
            <button className='reversed' onClick={this.props.logout} >Cerrar sesión</button>
            <button className='reversed' onClick={this.props.delete}>Eliminar cuenta</button>
          </>
        )
      }
    }

export default withAuth(ChangePassword);
