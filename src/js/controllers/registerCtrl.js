(function () {

    'use strict';

    angular.module('myApp')
        .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

    function registerCtrl($rootScope, $scope, $location, authService) {
        $scope.user =
        {
            username : "",
            description : "",
            email: "dolphlungren@dolphisGreat.com",
            password: "",
            dob: "1900-04-21T00:00:00.000Z",
            phone :  "3033333333",
            website: "http://www.bobross.com",
            slug:    '',
            __v: 0,
            _matches: [],
            interestedIn:
                [
                    1
                ],
            gender: 0,
            company:
            {
                bs: "Paint",
                catchPhrase: "Every day is a good day when you paint",
                name:  "Everyday is a good day when you paint"
            }
            ,
            address: {
                zipcode: "80202",
                suite: "420",
                city: "Denver",
                street: "123 Ross Ave.",
                geo:
                {
                    lng: 39,
                    lat: 105
                }
            },
            avatar: "http://3.bp.blogspot.com/-_Kdj4WHMgJs/T-x55RBodaI/AAAAAAAACT0/q6NMyeSeQ7A/s1600/01+Bob-Ross.jpg",
            names:
            {
                firstName: "Bob",
                lastName: "Ross"
            }
            ,
            admin: false,
            active: true
        };
        $scope.register = function() {
            authService.register($scope.user)
                .then(function(user) {

                    authService.setUserInfo(user);
                    $location.path('/');
                    $rootScope.currentUser = authService.getUserInfo();
                })
                .catch(function(err) {
                    // check status code, send appropriate message
                    console.log(err);
                });
        };
    }

})();