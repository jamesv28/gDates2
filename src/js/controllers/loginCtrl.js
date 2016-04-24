(function () {

    'use strict';

    angular.module('myApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

    function loginCtrl($rootScope, $scope, $location, authService) {
        $scope.user = {};
        $scope.login = function() {
            authService.login($scope.user)
                .then(function(user) {
                    authService.setUserInfo(user);
                    $location.path('/');
                    $rootScope.currentUser = authService.getUserInfo();
                    console.log('current user', $rootScope.currentUser);
                })
                .catch(function(err) {
                    // check status code, send appropriate message
                    console.log(err);
                });
        };
    }

})();