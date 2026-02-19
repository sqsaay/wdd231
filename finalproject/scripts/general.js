//Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last update date
document.getElementById("lastModified").innerHTML = document.lastModified;

//Ham Button
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const babygender = "niña";
const reveal = document.querySelector("#reveal-div");

reveal.innerHTML = `🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;

