import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data';

function MoviesList() {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {Object.values(movies).map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
