export default class WeatherService {  
  static getWeather(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}


// static async getWeather(city) {
//   try {
//     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
//     const jsonifiedResponse = await response.json();
//     if (!response.ok) {
//       const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
//       throw new Error(errorMessage);
//     }
//     return jsonifiedResponse;
//   } catch(error) {
//     return error;
//   }
// }


// return new Promise(function(resolve, reject) {
//   let request = new XMLHttpRequest(); 
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//   request.addEventListener('loaded', function() {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//     resolve([response, city]);
//     } else {
//     reject([this, response, city]);
//     }
//   });
//   request.open("GET", url, true);
//   request.send();
// });
