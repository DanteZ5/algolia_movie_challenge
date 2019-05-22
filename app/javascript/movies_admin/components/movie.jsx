import React, { Component } from 'react';

class Movie extends Component {
  // handleClick = () => {
  //   if (this.props.selectGif) {
  //     this.props.selectGif(this.props.id);
  //   }
  // }

  render() {
    // const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <li className="list-inline-item">
      <img src={this.props.movie.image} className="img"/>
      <p className="movie-title">{this.props.movie.title.substring(0, 20)}</p>
      <p className="movie-delete">delete</p>
      </li>
    );
  }
}

export default Movie;
