(function(){
    var app = angular.module('app');
    
    app.factory('ipService',function($http){
        return {
            getIp:function(){
                return $http.get('http://ipinfo.io');
            }
        };
    });

}());