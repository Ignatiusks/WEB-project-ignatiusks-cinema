import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; 

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p><strong>Сеанс:</strong> {movie.date}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p className="description">{movie.description}</p>
        <Link to={`/booking/${movie.id}`}>
          <button className="book-button">Забронювати</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
