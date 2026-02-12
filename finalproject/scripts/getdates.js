//Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last update date
document.getElementById("lastModified").innerHTML = document.lastModified;