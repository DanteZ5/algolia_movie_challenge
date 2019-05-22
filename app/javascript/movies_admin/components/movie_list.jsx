import React from 'react';
import Movie from './movie';

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {props.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
    </ul>
  );
};

export default MovieList;
