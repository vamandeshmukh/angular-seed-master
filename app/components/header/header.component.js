'use strict';

const HeaderController = ($scope, $location) => {

    $scope.blogId = '';

    $scope.searchBlogById = (blogId) => {
        if (blogId)
            $location.path(`blogs/${blogId}`);
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


