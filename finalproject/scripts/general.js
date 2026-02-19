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

//Form get info
const joinUsInfo = new URLSearchParams(window.location.search);

document.querySelector('.review-container').innerHTML =`
<h2>Review Submitted</h2>
<p>Thank you for submitting the review ${joinUsInfo.get('username')}</p>
<p>We have sent you the details to ${joinUsInfo.get('email')}</p>
<p>You will hear soon from us to get details of ${joinUsInfo.get('artistName')}</p>
`;