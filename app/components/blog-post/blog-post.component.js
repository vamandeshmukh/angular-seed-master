'use strict';

const dataUrl2 = 'https://jsonplaceholder.typicode.com/posts/';

const BlogPostController = ($scope, $http, $routeParams) => {

    $scope.blogId = $routeParams.blogId;
    $scope.currentBlog = {};

    console.log($scope.blogId);

    $http.get(dataUrl2 + $scope.blogId)
        .then((resp) => {
            $scope.currentBlog = resp.data;
            console.log(resp.data);
        })
        .catch((err) => {
            alert(`Blog with the id ${$scope.blogId} was not found!`);
            console.log(err);
            $scope.blogId = '';
            $scope.currentBlog = {};
        });

};

angular.module('blogPost', []);

angular
    .module('blogPost')
    .component('blogPost',
        {
            templateUrl: 'components/blog-post/blog-post.template.html',
            controller: BlogPostController
        }
    );



