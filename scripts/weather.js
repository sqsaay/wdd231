const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Required variables 
const apiKey = "02ca07c3d7610b01fec163f87c995985";
const latitude = "49.76";
const longitude = "6.64"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;



async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    } 
}

apiFetch();

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp} ℃`;
    const iconURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconURL);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = data.weather[0].description;
}
