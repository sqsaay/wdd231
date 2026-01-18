//Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('currentYear').textContent = currentYear;

//Last update date
document.getElementById('lastModify').innerHTML = document.lastModified;
