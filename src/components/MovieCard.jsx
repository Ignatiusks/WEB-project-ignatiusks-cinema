import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
     <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
      <p><strong>Сеанс:</strong> {movie.date}</p>
    </div>
  );
};

export default MovieCard;
