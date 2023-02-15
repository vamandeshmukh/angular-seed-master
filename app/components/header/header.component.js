'use strict';

const HeaderController = ($scope) => {

    $scope.searchBlog = (blogName) => {

    };

};

angular.module('header', []);

angular
    .module('header')
    .component('header',
        {
            templateUrl: 'components/header/header.template.html',
            controller: HeaderController
        }
    );



