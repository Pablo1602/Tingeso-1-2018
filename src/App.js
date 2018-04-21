import React, { Component } from 'react'
import logo from './cart.png'
import Modal from './Modal/Modal'
import Axios from 'axios'

import './App.css'

import FilmList from './FilmList/FilmList'

class App extends Component {

  state = {
    loading: true,
    films: [],
    isOpen: false
  };

  toggleModal = () => {

    this.setState({

      isOpen: !this.state.isOpen

    });
  }

  fetchFilms(){
    Axios.get('http://localhost:8081/mingeso-backend/producto/all')
    .then(response => {
      console.log(response);
      this.setState({films:response.data});
    })
    .catch(function (error) {
      console.log(error)
    })
  }


 componentDidMount(){
    this.fetchFilms()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo-cart" src={logo} alt="logo" />
          <h1 className="App-title">Bienvenido al carrito de compras </h1>
          <button onClick={this.toggleModal}> Nuevo ingreso </button>
          <Modal className="Modal"  show={this.state.isOpen} onClose={this.toggleModal} > </Modal>
        </header>
        <div className="App-intro">
          <FilmList films = {this.state.films} color = {this.state.color} />
        </div>
      </div>
    )
  }


}

export default App
