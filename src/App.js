import React, { Component } from 'react'
import logo from './cart.png'
import Axios from 'axios'

import './App.css'

import FilmList from './FilmList/FilmList'

class App extends Component {

  state = {
    loading: true,
    films: [],
  };

  fetchFilms(){
    Axios.get('https://ghibliapi.herokuapp.com/films')
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
          <h1 className="App-title">Bienvenido al carrito de compra </h1>
        </header>
        <div className="App-intro">
          <FilmList films = {this.state.films} color = {this.state.color} />
        </div>
      </div>
    )
  }


}

export default App
