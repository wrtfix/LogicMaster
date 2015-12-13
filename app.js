var app = angular.module('gameApp', ['jsonService']);

app.controller('MainCtrl', function($scope, JsonService) {
  JsonService.get(function(data){
    $scope.data = data;
  });
});
