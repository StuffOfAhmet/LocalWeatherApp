(function () {
    var app = angular.module('app');

    app.controller('indexController',function($scope,ipService){
        var init = function(){
            ipService.getIp().then(function(response){
                $scope.location = response.data;
            },function(err){
                console.log(err.statusText);
                alert('Cannot find location!');
            });
        };

        init();
    });
}());