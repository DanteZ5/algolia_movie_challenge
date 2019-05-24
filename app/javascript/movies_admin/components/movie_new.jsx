import React, { Component } from 'react';

class MovieNew extends Component {


  handleSubmit = () => {
    this.props.addMovie(this.refs)
  }

  render() {
    return (
      <div>
        <button className='add-back-button' onClick={this.props.toggleNewMovie}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="InputTitle">Title :</label>
            <input ref='title' placeholder='Starwars' />
          </div>
          <div className="form-group">
            <label htmlFor="SelectRating">Rating :</label>
            <select ref='rating'>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="add-back-button" onClick={this.handleSubmit}>Add Movie</button>
        </div>
      </div>
    );
  }
}

export default MovieNew;
