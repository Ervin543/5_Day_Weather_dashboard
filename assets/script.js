let weatherData;
const weatherSearchBar = document.querySelector('#weather-search-bar');
const weatherSearchButton = document.querySelector('#weather-search-button');


function weatherapi(event) {
    event.preventDefault()
    // console.log("hello world")
    
    const cityName = weatherSearchBar.value;
    console.log(cityName)
    
    var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&q=${cityName}&units=imperial&appid=8f5847b7966d81bce260c9541b08bccb`;
    
    
    
    weatherSearchBar.value = '';
    
    fetch(weatherURL)
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            return response.json();
        }
    })
    .then(function (data) {
        console.log(data)
        if(data !== null) {
            weatherData = data;
            useWeatherData(weatherData)
            
        }
    })
};



weatherSearchButton.addEventListener('click', weatherapi)

function useWeatherData (weatherData) {

        const list = weatherData.list;
        for (let i = 0; i < list.length; i += 8) {
          const name = weatherData.city.name;
          const temp = list[i].main.temp;
          const windSpeed = list[i].wind.speed;
          const humidity = list[i].main.humidity;
      
          const cityNameEl = document.createElement('p');
          const tempEl = document.createElement('p');
          const windSpeedEl = document.createElement('p');
          const humidityEl = document.createElement('p');
      
          cityNameEl.textContent = `City Name: ${name}`
          tempEl.textContent = `Temp: ${temp}`;
          windSpeedEl.textContent = `Wind Speed: ${windSpeed}`;
          humidityEl.textContent = `Humidity: ${humidity}`;
      
          document.body.appendChild(cityNameEl);
          document.body.appendChild(tempEl);
          document.body.appendChild(windSpeedEl);
          document.body.appendChild(humidityEl);
        
      }
      
    
    
    
    
}