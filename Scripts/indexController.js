(function () {
    var app = angular.module('app');

    app.controller('indexController', function ($scope, ipService, weatherService) {
        // initialize fields
        $scope.errorMessage = null;
        $scope.location = null;
        $scope.weather = null;
        $scope.currentDegree = null;

        var init = function () {
            ipService.getIp().then(function (response) {
                $scope.errorMessage = null;
                $scope.location = response.data;
                getWeather($scope.location.city, $scope.location.country);
            }, function (err) {
                console.log(err.statusText);
                $scope.errorMessage = 'Cannot Get Ip Information';
            });
        };

        var getWeather = function (city, country) {
            weatherService.getWeather(city, country).then(function (response) {
                $scope.weather = response.data;
                $scope.currentDegree = convertDegree(true,$scope.weather.main.temp);
            }, function (err) {
                console.log(err.statusText);
                $scope.errorMessage = 'Cannot Get Weather Data';
            });
        };

        var convertDegree = function (fToC, value) {
            if (fToC) { // Fahrenheit to Celsius
                value = ((value - 32) * (5)) / (9);
            } else { // Reverse
                value = ((value * 9) / (5)) + (32);
            }

            return value;
        };


        init();
    });
}());