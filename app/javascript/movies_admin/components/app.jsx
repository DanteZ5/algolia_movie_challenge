import React, { Component } from 'react';
import MovieList from './movie_list';
import SearchBar from './search_bar';

const applicationID = 'K5HTCP4OWX';
const apiKey = '4a4db9fb2c073d1c625d4521cf834ac2';
const client = algoliasearch(applicationID, apiKey);
const index = client.initIndex('Movie');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: JSON.parse(root.dataset.movies)
      // movies: ["starwars", "indiana jones", "harry potter"]
    };
  }

  movieDelete = (movieID) => {
      $.ajax({
        url: `/api/v1/movies/${movieID}`,
        type: 'DELETE',
        success:() => {
          this.removeMovie(movieID);
          console.log(`movie #${movieID} removed from db`)
        }
    });
    // this.props.handleDelete(id);
  }

  removeMovie(id) {
    var newMovies = this.state.movies.filter((movie) => {
        return movie.objectID != id;
    });

    this.setState({ movies: newMovies });
  }



  search = (query) => {
    index.search(event.target.value, { hitsPerPage: 24, page: 0 })
      .then((content) => {
        this.setState({
          movies: content.hits
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }


  render() {
    return (
      <div className="container text-center">
      <h1>Hello Movie</h1>
      <SearchBar algoliaSearchFunction={this.search}/>
      <MovieList movies={this.state.movies} movieDelete={this.movieDelete} />
      </div>
    );
  }
}

export default App;
