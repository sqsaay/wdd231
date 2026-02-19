async function getData() {
  try {
    const response = await fetch('data/artists.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.artists;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
}


const data = await getData();
console.log(data);

function displayArtists(artists) {
  let idBtn = 0;
  const artistsContainer = document.querySelector(".artist-container");

  artists.forEach(artist => {
    const card = document.createElement("section");
    card.classList = "artistSection";
    card.dataset.artist = artist.name; 
    const name = document.createElement("h2");
    name.textContent = artist.name;

    const genre = document.createElement("p");
    genre.textContent = artist.genre;

    const onConcert = document.createElement("p");
    if (artist.concerts_2026.length === 0) {
      onConcert.textContent = "No upcoming concerts!";
    } else {
      onConcert.textContent = "Prepare yourself for upcoming concerts!";
    }

    const portrait = document.createElement("img");
    portrait.src = artist.image;
    portrait.alt = artist.name;
    portrait.height = 100;

    idBtn++;
    const artistBtn = document.createElement("button");
    artistBtn.id = `artistBt-${idBtn}`;
    artistBtn.textContent = "Learn More";
    artistBtn.classList = "artistButtons openModalBtn";

    // Event event listener here
    artistBtn.addEventListener("click", () => {
      showArtistModal(artist);
    });

    card.append(name, genre, portrait, onConcert, artistBtn);
    artistsContainer.appendChild(card);
  });
}

displayArtists(data);

// Modal
const modal = document.getElementById("artistModal");
const closeBtn = document.querySelector(".closeBtn");

function showArtistModal(artist) {
  document.getElementById("modalName").textContent = artist.name;
  document.getElementById("modalDescription").textContent = artist.description;

  const concertsDiv = document.getElementById("modalConcerts");
  concertsDiv.innerHTML = ""; // clear previous content

  if (!artist.concerts_2026 || artist.concerts_2026.length === 0) {
    concertsDiv.textContent = "No upcoming concerts!";
  } else {
    // Loop through each concert object
    artist.concerts_2026.forEach(concert => {
      const concertItem = document.createElement("p");
      // Adjust keys based on your JSON structure (example: city, date, venue)
      concertItem.textContent = `${concert.city} – ${concert.date} @ ${concert.venue}`;
      concertsDiv.appendChild(concertItem);
    });
  }

  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
