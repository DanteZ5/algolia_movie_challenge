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
      <li>
      <img src={this.props.movie.image} className="img"/>
      <p>{this.props.movie.title}</p>
      <span>delete</span>
      </li>
    );
  }
}

export default Movie;
