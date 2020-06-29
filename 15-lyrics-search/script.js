const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('form');
const more = document.getElementById('more');

const baseURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${baseURL}/suggest/${term}`);
  const data = await res.json();

  console.log(data);
}

function validateSearch(event) {
  event.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
}

// Event listeners
form.addEventListener('submit', validateSearch);
