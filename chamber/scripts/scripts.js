import { places } from "../data/places.mjs";

//Discover cards
let counterBtn = 0;
const displayPlaces = (places) => {
    places.forEach(place => {
        const card = document.createElement("section");
        const portrait = document.createElement("img");
        const portraitFigure = document.createElement("figure");
        const portraitCaption = document.createElement("figcaption");
        const name = document.createElement("h2");
        const addressTag = document.createElement("address");
        const address = document.createElement("p");
        const description = document.createElement("p");
        const placeBtn = document.createElement("button");

        portrait.setAttribute("src", place.photo_url);
        portrait.setAttribute("alt", place.name)
        portrait.setAttribute("width", "300");
        portrait.setAttribute("height", "200");
        portrait.setAttribute("loading", "lazy");
        portraitCaption.innerHTML = place.name;
        name.textContent = `${place.name}`;
        address.textContent = `${place.address}`;
        description.textContent = `${place.description}`;
        placeBtn.textContent = `Learn More`;

        placeBtn.id = `placeBtn-${counterBtn += 1}`

        addressTag.append(address);
        portraitFigure.append(portrait, portraitCaption);
        const cards = document.querySelector("#discover-container");
        card.append(portraitFigure, name, addressTag, description, placeBtn);
        cards.appendChild(card);
    });
}

displayPlaces(places);

//Get last date data
const dialog = document.querySelector("#last-visit");
//const closeDialog = document.querySelector(".close-btn-last-visit");
const messageArea = document.getElementById("last-visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    // First visit
    messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - parseInt(lastVisit, 10);
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor(diff / msPerDay);

    if (diff < msPerDay) {
        messageArea.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        messageArea.textContent = "You last visited 1 day ago.";
    } else {
        messageArea.textContent = `You last visited ${daysBetween} days ago.`;
    }
}
dialog.showModal();

const visitContainer = document.getElementById("last-visit");

document.getElementById("close-btn-last-visit").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("main").removeChild(visitContainer);
});

// Store current visit
localStorage.setItem("lastVisit", now);
