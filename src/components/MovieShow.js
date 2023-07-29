import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';

function MovieShow() {
  const { movieId } = useParams();
  const movie = movies[movieId];

  return (
    <div>
      <h1>Movie Details</h1>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieShow;
