'use strict';

const blogUrl = 'https://jsonplaceholder.typicode.com';

const BlogPostController = ($scope, $http, $routeParams) => {

    $scope.blogId = $routeParams.blogId;
    $scope.currentBlog = {};
    $scope.blogWriter = {};
    $scope.comments = [];

    $http.get(`${blogUrl}/posts/${$scope.blogId}`)
        .then((resp) => {
            $scope.currentBlog = resp.data;
            console.log($scope.currentBlog);
            $http.get(`${blogUrl}/users/${$scope.currentBlog.userId}`)
                .then((resp) => {
                    $scope.blogWriter = resp.data;
                    console.log($scope.blogWriter);
                })
                .catch((err) => {
                    console.log(err);
                    $scope.blogId = '';
                    $scope.currentBlog = {};
                    $scope.blogWriter = {};
                    $scope.comments = [];
                });
            $http.get(`${blogUrl}/posts/${$scope.blogId}/comments`)
                .then((resp) => {
                    $scope.comments = resp.data;
                    console.log($scope.blogWriter.length);
                })
                .catch((err) => {
                    console.log(err);
                    $scope.blogId = '';
                    $scope.currentBlog = {};
                    $scope.blogWriter = {};
                    $scope.comments = [];
                });
        })
        .catch((err) => {
            alert(`Blog with the id ${$scope.blogId} was not found!`);
            console.log(err);
            $scope.blogId = '';
            $scope.currentBlog = {};
            $scope.blogWriter = {};
            $scope.comments = [];
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



