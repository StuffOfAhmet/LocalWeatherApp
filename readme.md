# Local Weather App

A basic angular app which shows weather data according to the client's location.

> Click [here](http://codepen.io/ahmetGdy/pen/WRyXxM) to view demo

## Project Structure

- **index.html** is the main and only page. I've used [AngularJS](https://angularjs.org/) to flavour the app. Angular expressions are used to show weather and location information to the client.

- Scripts folder include all the javascript code :
    * **app.js** used to define the angular module app
    * **indexController.js** stores the angular controller. It also stores the main logic and some other helper functions
    * **ip-service.js** contains an angular service used to make http requests to receive location
    * **weatherService.js** contains an angular service used to receive weather information


## 3rd Party Dependencies
- [AngularJS](https://angularjs.org/) SPA framework by Google
- [jQuery](https://jquery.com/) rich javascript library
- [Weather Icons](https://erikflowers.github.io/weather-icons/) weather themed icons as css
- [ip info](http://ipinfo.io/) simple ip-information api
- [OpenWeatherMap](http://openweathermap.org/) Weather Info Api