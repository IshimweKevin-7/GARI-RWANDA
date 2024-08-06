// Sample movie data (replace with real data)

const movies = [
  { title: "Kigali-Byumba-Gatuna", time: "7:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "7:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "8:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "8:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "9:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "9:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "10:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "10:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "11:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "11:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "12:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "12:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "1:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "1:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "2:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "2:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "3:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "3:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "4:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "4:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "5:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "5:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "6:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "6:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "7:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "7:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "8:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "8:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "9:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "9:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "10:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "10:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Byumba-Gatuna", time: "11:00 PM", date: "2024-10-24", price: 2500},

  { title: "Kigali-Rwamagana-Kayonza", time: "7:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "7:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "8:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "8:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "9:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "9:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "10:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "10:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "11:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "11:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "12:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "12:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "1:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "1:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "2:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "2:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "3:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "3:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "4:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "4:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "5:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "5:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "6:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "6:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "7:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "7:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "8:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "8:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "9:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "9:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "10:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "10:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Rwamagana-Kayonza", time: "11:00 PM", date: "2024-10-24", price: 2500},

  { title: "Kigali-Nyagatare-Kagitumba", time: "7:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "7:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "8:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "8:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "9:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "9:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "10:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "10:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "11:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "11:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "12:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "12:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "1:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "1:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "2:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "2:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "3:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "3:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "4:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "4:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "5:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "5:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "6:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "6:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "7:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "7:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "8:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "8:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "9:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "9:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "10:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "10:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyagatare-Kagitumba", time: "11:00 PM", date: "2024-10-24", price: 2500},

  { title: "Kayonza-Kibungo-Rusumo", time: "7:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "7:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "8:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "8:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "9:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "9:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "10:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "10:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "11:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "11:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "12:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "12:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "1:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "1:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "2:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "2:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "3:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "3:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "4:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "4:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "5:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "5:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "6:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "6:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "7:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "7:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "8:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "8:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "9:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "9:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "10:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "10:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kayonza-Kibungo-Rusumo", time: "11:00 PM", date: "2024-10-24", price: 2500},

  { title: "Kigali-Nyanza-Butare", time: "7:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "7:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "8:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "8:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "9:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "9:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "10:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "10:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "11:00 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "11:30 AM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "12:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "12:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "1:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "1:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "2:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "2:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "3:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "3:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "4:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "4:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "5:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "5:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "6:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "6:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "7:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "7:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "8:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "8:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "9:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "9:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "10:00 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "10:30 PM", date: "2024-10-24", price: 2500},
  { title: "Kigali-Nyanza-Butare", time: "11:00 PM", date: "2024-10-24", price: 2500}
];



const movieList = document.getElementById('movie-list');
const movieSelect = document.getElementById('movie-select');
const ticketsInput = document.getElementById('tickets');
const bookButton = document.getElementById('book-button');
const bookingConfirmation = document.getElementById('booking-confirmation');

// Add movies to the select dropdown
movies.forEach(movie => {
  const option = document.createElement('option');
  option.value = movie.title; // Set value to the movie title
  option.text = `${movie.title} (${movie.time}, ${movie.date})`;
  movieSelect.appendChild(option);
});

// Handle booking button click
bookButton.addEventListener('click', () => {
  const selectedMovie = movieSelect.value;
  const numTickets = ticketsInput.value;

  // Find the selected movie in the data
  const selectedMovieData = movies.find(movie => movie.title === selectedMovie);

  // Calculate total price
  const totalPrice = selectedMovieData.price * numTickets;

  // Display booking confirmation
  bookingConfirmation.innerHTML = `
    <h2>Booking Confirmed</h2>
    <h3><p>Destination: ${selectedMovie}</p>
    <p>Number of Tickets: ${numTickets}</p>
    <p>Total Price: ${totalPrice.toFixed(0)} RWF</p></h3>
    <button onclick="navigate()" style="padding: 30px 50px; background-color: #fff; color: #000;border: solid; border-radius: 10px; font-size: 28px; font-weight: bold;">Pay & Get Ticket</button>
  `;
});
// ... (Previous JavaScript) ...

// Handle booking button click
bookButton.addEventListener('click', () => {
  // ... (Previous booking logic) ...

  // Add the "show" class to the booking confirmation
  bookingConfirmation.classList.add('show'); 
});

const toggle = document.querySelector('[aria-pressed]')

document.documentElement.dataset.theme = 'dark'

const flip = () => {
  const isPressed = toggle.matches('[aria-pressed=true]')
  document.documentElement.dataset.theme = isPressed ? 'dark' : 'light'
  toggle.setAttribute('aria-pressed', isPressed ? false : true)
}

const toggleTheme = () => {
  if (!document.startViewTransition) return flip()
  document.startViewTransition(() => flip())
}

toggle.addEventListener('click', toggleTheme)


const pickers = document.querySelectorAll('.color-picker')

let colorPicker
let currentNote

const setTheme = (event) => {
  currentNote.style.setProperty('--color', event.target.value)
}

const pickColor = (event) => {
  currentNote = event.target.previousElementSibling
  const currentColor = getComputedStyle(currentNote).getPropertyValue('--color')
  if (colorPicker) {
    colorPicker.removeEventListener('input', setTheme)
    colorPicker.remove()
  }
  colorPicker = Object.assign(document.createElement('input'), {
    type: 'color',
    value: currentColor,
    className: 'sr-only'
  })
  document.body.appendChild(colorPicker)
  colorPicker.click()
  colorPicker.addEventListener('input', setTheme)
}
for (const picker of pickers) {
  picker.addEventListener('click', pickColor)
}


function navigate() {
  window.location.href = 'Payment.html';
}
