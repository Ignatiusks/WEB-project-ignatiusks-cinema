import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const [seats, setSeats] = useState(
    Array.from({ length: 30 }, () => ({ status: 'free' }))
  );

  const handleSelect = (index) => {
    setSeats((prev) =>
      prev.map((seat, i) =>
        i === index
          ? { status: seat.status === 'selected' ? 'free' : 'selected' }
          : seat
      )
    );
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <CinemaHall seats={seats} onSelect={handleSelect} />
    </div>
  );
};

export default Booking;
