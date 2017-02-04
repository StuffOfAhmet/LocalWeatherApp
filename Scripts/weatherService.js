(function(){
    var app = angular.module('app');
    
    app.factory('weatherService',function($http){
        var appId = '41ee98a9067f4ad60aee8195e101027d';
        
        return {
            getWeather:function(){
                return $http.get('http://ipinfo.io');
            }
        };
    });

}());