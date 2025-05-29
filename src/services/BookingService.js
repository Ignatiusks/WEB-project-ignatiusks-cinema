
const BOOKING_KEY = 'bookings';

export const saveBooking = (movieId, userInfo, selectedSeats) => {
  const current = JSON.parse(localStorage.getItem(BOOKING_KEY)) || {};
  current[movieId] = {
    user: userInfo,
    seats: selectedSeats,
  };
  localStorage.setItem(BOOKING_KEY, JSON.stringify(current));
};

export const getBookedSeats = (movieId) => {
  const current = JSON.parse(localStorage.getItem(BOOKING_KEY)) || {};
  return current[movieId]?.seats || [];
};
