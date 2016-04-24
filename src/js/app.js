// sample angular code

var app = angular.module('myApp',
    [
        'ngRoute',
        'ui.bootstrap'
        //'membersDirective'
    ]);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
