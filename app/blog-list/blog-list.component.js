'use strict';

const dataUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogListController = ($scope, $http) => {

    $scope.blogData = [];

    $http.get(dataUrl)
        .then((resp) => {
            $scope.blogData = resp.data;
            console.log(resp.data);
        })
        .catch(err => console.log(err));
};


angular.module('blogList', []);

angular
    .module('blogList')
    .component('blogList',
        {
            templateUrl: 'blog-list/blog-list.template.html',
            controller: BlogListController
        }
    );

