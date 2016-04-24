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
        .when('/register', {
            templateUrl: 'views/partials/register.html',
            controller: 'registerCtrl'
        })
        .when('/search', {
            templateUrl: 'views/partials/search.html',
            controller: 'searchCtrl'
        })
        .when('/logout', {
            templateUrl: 'views/partials/logout.html',
            controller: 'logoutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}); //end of routes
