import React, { Component } from 'react';
import MovieList from './movie_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: JSON.parse(root.dataset.movies)
      // movies: ["starwars", "indiana jones", "harry potter"]
    };
  }


  render() {
    return (
      <div>
      <h1>Hello Movie</h1>
      <SearchBar />
      <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
