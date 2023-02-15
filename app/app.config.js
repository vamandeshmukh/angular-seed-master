'use strict';

angular
    .module('phonecatApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
                .when('/blogs', {
                    template: '<blog-list></blog-list>'
                })
                .when('/laptops', {
                    template: '<laptop-list></laptop-list>'
                })
                .when('/phones', {
                    template: '<phone-list></phone-list>'
                })
                .when('/home', {
                    template: '<home></home>'
                })
                .when('/', {
                    template: '<home></home>'
                })
                .otherwise('/home');
        }
    ]);
