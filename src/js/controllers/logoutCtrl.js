

(function() {
    'use strict';

    angular.module('myApp')
        .controller('logoutCtrl', logoutCtrl);

    function logoutCtrl($scope , authService) {
        $scope.logout = function() {
            authService.logout();
        }
    }
})(); //end of controller