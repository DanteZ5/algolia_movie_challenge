import React from 'react';
import Movie from './movie';

const MovieList = (props) => {
  return (
    <ul className="list-inline">
      {props.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
    </ul>
  );
};

export default MovieList;
