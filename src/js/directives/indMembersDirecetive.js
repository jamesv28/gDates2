
(function() {

    angular.module('myApp')
        .directive('membersInfo',function() {
            return {
                restrict: 'E',
                scope: {
                    member: '='
                },
                transclude: true,
                templateUrl: 'views/directives/indMember.html',
                controller: function ($scope) {
                    //console.log('controller',$scope.member);
                }
            }
        });
})();