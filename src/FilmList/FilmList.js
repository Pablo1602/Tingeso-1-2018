import React, { Component } from 'react'
import Film from './../Film/Film'

class FilmList extends Component {

  buildFilms(){
    return this.props.films.map((film) => {
      return(
        <Film id={film.id} title={film.title} codigo={film.release_date} precio={film.rt_score}  color={this.props.color} />
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
