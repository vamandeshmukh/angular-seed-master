'use strict';

const HeaderController = () => {

};

angular.module('header', ['ngRoute']);

angular
    .module('header')
    .component('header',
        {
            templateUrl: 'header/header.template.html',
            controller: HeaderController
        }
    );



