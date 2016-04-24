(function () {
    angular.module('myApp')
        .controller('searchCtrl', searchCtrl);

    searchCtrl.$inject = ['$scope', 'getMembersService'];

    function searchCtrl($scope, getMembersService) {
        $scope.loading = true;

        getMembersService.getallMembers()
            .then(function(data) {
                $scope.members = data.data.data;
                $scope.viewby = 8;
                $scope.totalItems = $scope.members.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 5;
            }).finally(function() {
                $scope.loading= false;
            });



        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; //reset to first paghe
        };
    }
})();   //end of controller
