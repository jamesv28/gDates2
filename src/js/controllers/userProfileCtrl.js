(function() {
    angular.module('myApp')
        .controller('userProfileCtrl',userProfileCtrl);

    userProfileCtrl.$inject = ['$scope', '$rootScope', 'authService'];

    function userProfileCtrl($scope, $rootScope, authService) {
        $rootScope.currentUser = authService.getUserInfo();
        //try to fix issue with currentUser
        $scope.user = JSON.parse( $rootScope.currentUser);
        console.log('brought to the local level', $scope.user);
    }
})();