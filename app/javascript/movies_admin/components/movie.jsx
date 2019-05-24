import React, { Component } from 'react';

class Movie extends Component {


  handleDelete = () => {
    if (this.props.movieDelete) {
      this.props.movieDelete(this.props.movie.objectID);
    }
  }



  render() {
    // const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <li className="list-inline-item">
      <div className="movie-cover">
        <img src={this.props.movie.image} className="img"/>
        <div className="movie-rating"><h5>{this.props.movie.rating}</h5></div>
      </div>
      <p className="movie-title">{this.props.movie.title.substring(0, 20)}</p>
      <button className="delete-button" onClick={this.handleDelete}>
        <i className="fa fa-trash-alt"></i>
      </button>
      <div>


      </div>
      </li>
    );
  }
}

export default Movie;
