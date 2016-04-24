app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'views/partials/landing.html',
            controller: 'homeCtrl'
        })
        .when('/login',{
            templateUrl: 'views/partials/login.html',
            controller: 'loginCtrl'
        })
        .when('/members', {
            templateUrl: 'views/partials/members.html',
            controller: 'membersCtrl'
        })
        .when('/search', {
            templateUrl: 'views/partials/search.html',
            controller: 'searchCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}); //end of routes