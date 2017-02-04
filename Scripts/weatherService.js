(function () {
    var app = angular.module('app');

    app.factory('weatherService', function ($http) {
        var appId = '41ee98a9067f4ad60aee8195e101027d';

        return {
            getWeather: function (city, country) {
                var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + appId;
                return $http.get(api);
            }
        };
    });

}());