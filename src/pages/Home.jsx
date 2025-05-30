import React from 'react';
import MovieList from '../components/MovieList';
import movies from '../data/movies';

const Home = () => {
  return (
    <div>
      
      <div
        className="header"
        style={{
          backgroundImage: "url('/images/Headre.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{
          color: "white",
          fontSize: "64px",
          margin: 0,
          textShadow: "2px 2px 8px black"
        }}>
          CINEMA
        </h1>
      </div>

      
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
