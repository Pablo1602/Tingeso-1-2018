import React, { Component } from 'react'
import Products from '../Film/Products'

class FilmList extends Component {

  buildFilms(){
    return this.props.films.map((film) => {
      return(
        <Products id={film.id}  codigo={film.codigo} nombre={film.nombre} precio={film.precio} color={this.props.color} />
      )
    })
  }

  render() {
    return (
      <div className="films-container">
        {this.buildFilms()}
      </div>

    )
  }

}

export default FilmList
