'use strict';

const HeaderController = ($scope, $location) => {

    $scope.blogId = '';
    $scope.randomBlogId = '';

    setInterval(() => {
        $scope.randomBlogId = Math.floor((Math.random() * 100) + 1);
    }, 3000);

    $scope.searchBlogById = (blogId) => {
        if (blogId)
            $location.path(`blog/${blogId}`);
        $scope.blogId = '';
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


