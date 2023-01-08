import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  let promise = WeatherService.getWeather(city);
  promise.then(function(response) {
    printElements(response);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

function printElements(results) {
  document.querySelector('#showResponse').innerText = `The humidity in ${results[1]} is ${results[0].main.humidity}%.
  The temperature in Kelvins is ${results[0].main.temp} degrees or ${((1.8*(results[0].main.temp - 273)) + 32).toFixed(2)} degrees Fahrenheit.
  The weather is ${results[0].weather[0].main}.`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}:  ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});