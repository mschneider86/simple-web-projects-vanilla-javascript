const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const baseURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${baseURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

// Show song and artist in DOM
function showData(data) {
  //let output = '';

  // data.data.forEach((song) => {
  //   output += `
  //     <li>
  //       <span><strong>${song.artist.name}</strong> - ${song.title}</span>
  //       <button class="btn" data-artist="${song.artist.name}"
  //     data-songtitle="${song.title}">Get Lyrics</button>
  //     </li>

  //   `;
  // });

  // result.innerHTML = `
  //   <ul class="songs">
  //   ${output}
  //   </ul>
  // `;

  result.innerHTML = `
  <ul class="songs">
  ${data.data
    .map(
      (song) => `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
     <button class="btn" data-artist="${song.artist.name}"
      data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
    )
    .join('')}
  </ul>
  `;
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
