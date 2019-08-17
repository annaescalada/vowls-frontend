import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Loading from '../components/Loading';
import VowlChart from '../components/VowlChart'
import SearchBar from '../components/SearchBar'

class Vowls extends Component {
  state ={
    search :'',
    vowl:false,
    isVowlLoading: false,
    isLoading: true
  } 

  handleSearchChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleVowlClick = (event) => {
    this.setState({isVowlLoading: true});
    //llamada al backend para obtener ingredientes
    //lógica del random vowl
    setTimeout(() => 
      this.setState({
        isVowlLoading:false,
        vowl: true
      }) , 1000)
  }

  componentDidMount() {
  }

  render() {
    const { isLoading, isVowlLoading, vowl } = this.state;
    console.log(this.state.search)
    return (
      <>
      <section>
        <>
          <button onClick={this.handleVowlClick}>Generar vowl</button>
          {isVowlLoading ? 
            <Loading text1='Generando un' span='vowl' text2='saludable, equilibrado, completo y delicioso!'></Loading> 
          : null }
          {vowl ?
            <>
              <button className="reversed" onClick={this.handleVowlClick}>Guardar</button>
              <VowlChart></VowlChart> 
            </>
          : null }

          <h3>Mis vowls</h3>
          <SearchBar value={this.state.search} onChange={this.handleSearchChange}/>
          
        </>
      <div className='last'></div>
      </section>
      </>
      )
  }
}

export default withAuth(Vowls);
