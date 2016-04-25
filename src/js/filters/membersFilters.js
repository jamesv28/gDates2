(function() {
    //filter for gender
    angular.module('myApp')
        .filter('gender', function () {
            return function (input) {
                var genders = ['Male', 'Female', 'Other', 'Declined to Answer'];
                return genders[input];
            };
        });
    //filter for age
    angular.module('myApp')
        .filter('age', function() {
            return function(input) {
                if (!input) { return; }
                var today = new Date().toString().split(' ')[3];
                input = input.split('-')[0];
                return today - input;
            };
        });

})();
