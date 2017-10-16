(function() {
    //TODO: (mark out for submission) clears cookies each time the page is loaded
    //document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

     angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'ngCookies', 'firebase'])
         .config(config);
 })();
