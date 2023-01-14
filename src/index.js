import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js';

//Business
async function getWeather(city) {
  const response = await WeatherService.getWeather(city);
  if (response.main) {
    printElements(response, city);
  } else {
    printError(response, city);
  }
}

// UI Logic
function printElements(response, city) {
  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.
  The temperature in Kelvins is ${response.main.temp} degrees or ${((1.8*(response.main.temp - 273)) + 32).toFixed(2)} degrees Fahrenheit.
  The weather is ${response.weather[0].main}.`;
}

function printError(error, city) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}:  
    ${error}.`;
}   

function handleFormSubmission(e) {
  e.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
} 

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});