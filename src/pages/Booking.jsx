import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { saveBooking, getBookedSeats } from '../services/BookingService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CinemaHall from '../components/CinemaHall';
import movies from '../data/movies';
 
const Booking = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const [seats, setSeats] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // завантаження заброньованих місць
useEffect(() => {
    const booked = getBookedSeats(id);
    const allSeats = Array.from({ length: 30 }, (_, i) => ({
      status: booked.includes(i) ? 'booked' : 'free',
    }));
    setSeats(allSeats);
  }, [id]);

  const handleSelect = (index) => {
    setSeats((prev) =>
      prev.map((seat, i) => {
        if (seat.status === 'booked') return seat;
        if (i === index) {
          return {
            status: seat.status === 'selected' ? 'free' : 'selected',
          };
        }
        return seat;
      })
    );
  };

  const handleBooking = () => {
    // валідація
    if (!name || !phone || !email) {
      toast.error('Заповніть усі поля');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Невірний формат email');
      return;
    }

    const selectedIndexes = seats
      .map((seat, index) => (seat.status === 'selected' ? index : null))
      .filter((v) => v !== null);

    if (selectedIndexes.length === 0) {
      toast.error('Виберіть хоча б одне місце');
      return;
    }

    saveBooking(id, { name, phone, email }, selectedIndexes);
    toast.success('Бронювання успішне!');
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <CinemaHall seats={seats} onSelect={handleSelect} />

      {<div className="form">
        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
         onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleBooking}>Забронювати</button>
      </div>}

      <ToastContainer />
    </div>
  );
};

export default Booking;
