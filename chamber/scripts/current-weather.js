const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const descTemp = document.querySelector('#desc-temp');
const maxTemp = document.querySelector('#max-temp');
const lowTemp = document.querySelector('#low-temp');
const humTemp = document.querySelector('#hum-temp');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

//Required variables 
const apiKey = "02ca07c3d7610b01fec163f87c995985";
const latitude = "14.64";
const longitude = "-90.51"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;


async function apiFetch(urlVar) {
    try{
        const response = await fetch(urlVar);
        if (response.ok){
            const data = await response.json();
            console.table(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    } 
}

apiFetch(url);

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp} ℃`;
    const iconURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    descTemp.textContent = data.weather[0].description;
    weatherIcon.setAttribute("src", iconURL);
    weatherIcon.setAttribute("alt", descTemp);
    maxTemp.textContent = `High: ${data.main.temp_max}°`;
    lowTemp.textContent = `Low: ${data.main.temp_min}°`;
    humTemp.textContent = `Humidity: ${data.main.humidity}%`;
    sunrise.textContent = `Sunrise:${getTime(data.sys.sunrise)}`;
    sunset.textContent = `Sunset:${getTime(data.sys.sunset)}`;
    
    function getTime(time){
        const date = new Date(time * 1000);
        const options = { hour: 'numeric', minute: 'numeric', hour12: true }; 
        return date.toLocaleTimeString('en-US', options);
    }
}

