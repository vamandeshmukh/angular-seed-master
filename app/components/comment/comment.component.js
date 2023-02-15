'use strict';

const commentUrl = 'https://jsonplaceholder.typicode.com';

const CommentController = ($scope, $http) => {

    $scope.comments = [];

    $scope.comments = [];
    $http.get(`${commentUrl}/posts/${postId}/comments`)
        .then((resp) => {
            $scope.comments = resp.data;
            console.log($scope.comments.length);
        })
        .catch((err) => {
            console.log(err);
        });
};

angular.module('comment', []);

angular
    .module('comment')
    .component('comment',
        {
            templateUrl: 'components/comment/comment.template.html',
            controller: CommentController
        }
    );







