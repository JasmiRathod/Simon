// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice',
    'mainnavigationservice',
    'ui.bootstrap',
    'ui.utils'

]);

firstapp.config(['$routeProvider',
                 function ($routeProvider) {
        $routeProvider.
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).
        when('/intelligence', {
            templateUrl: 'views/template.html',
            controller: 'intelligence'
        }).
        when('/clients', {
            templateUrl: 'views/template.html',
            controller: 'clients'
        }).
        when('/partners', {
            templateUrl: 'views/template.html',
            controller: 'partners'
        }).
        when('/social', {
            templateUrl: 'views/template.html',
            controller: 'social'
        }).
         when('/people', {
            templateUrl: 'views/template.html',
            controller: 'people'
        }).
         when('/clientspeak', {
            templateUrl: 'views/template.html',
            controller: 'clientspeak'
        }).
         when('/contact', {
            templateUrl: 'views/template.html',
            controller: 'contact'
        }).
        otherwise({
            redirectTo: '/about'
        });
  }]);