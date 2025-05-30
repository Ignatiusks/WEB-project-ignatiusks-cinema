import React from 'react';
import './CinemaHall.css';

const CinemaHall = ({ seats, onSelect }) => {
  return (
    <div className="hall">
      {seats.map((seat, index) => {
        if (seat === null) {
          return <div key={index} className="empty-seat"></div>; // прохід
        }

        return (
          <div
            key={index}
            className={`seat ${seat.status}`}
            onClick={() => onSelect(index)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default CinemaHall;
