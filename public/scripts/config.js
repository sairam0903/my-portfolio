angular
    .module('MyPortfolio')

    .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/home-page.html',
                controller: 'HomePageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);