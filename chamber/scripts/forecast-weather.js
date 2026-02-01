const weatherForecast = document.querySelector('#weather-forecast'); 
//Required variables
const keyApi = "02ca07c3d7610b01fec163f87c995985";
const lat = "14.54";
const lon = "-90.53"
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`;


async function apiFetch(urlVar) {
    try {
        const response = await fetch(urlVar);
        if (response.ok) {
            const data = await response.json();
            console.table(data.list); 
            displayForecast(data);    
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching forecast:", error);
    }
}


function displayForecast(data) {
    const forecastByDay = {};

    
    data.list.forEach(item => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });

        if (!forecastByDay[day]) {
            forecastByDay[day] = [];
        }
        forecastByDay[day].push(item.main.temp);
    });

   
    const days = Object.keys(forecastByDay).slice(0, 3);

    
    days.forEach(day => {
        const temps = forecastByDay[day];
        const avgTemp = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);

        
        console.log(`${day}: ${avgTemp} °C`);

      
        const dayElement = document.createElement("p"); 
        dayElement.innerHTML = `${day}: <strong>${avgTemp}°C</strong> `; 
        weatherForecast.appendChild(dayElement);
    });
}

apiFetch(urlForecast);
