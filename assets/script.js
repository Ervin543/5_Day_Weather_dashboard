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
    
    const name = weatherData.list[0].main.name;
    const temp = weatherData.list[0].main.temp;
    const windSpeed = weatherData.list[0].wind.speed;
    const humidity = weatherData.list[0].main.humidity;
    
    
    
    const cityNameEl = document.querySelector('.cityName');
    const tempEl = document.querySelector('.temp');
    const windSpeedEl = document.querySelector('.windSpeed');
    const humidityEl = document.querySelector('.humidity');
    
    
    
    cityNameEl.textContent = `cityName: ${name}`
    tempEl.textContent = `temp: ${temp}`;
    windSpeedEl.textContent = `wind.speed: ${windSpeed}`;
    humidityEl.textContent = `humidity: ${humidity}`;
    
    
    
    
}