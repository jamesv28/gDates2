angular.module('footerDirective', [])
    .directive('footerInfo', function() {
        return {
            restrict: 'E',
            //scope: {
            //    member: '='
            //},
            transclude: true,
            templateUrl: 'views/directives/footer.html',
            controller: function($scope) {
                //console.log('controller',$scope.member);
            }
        };
    });  //end of directive

