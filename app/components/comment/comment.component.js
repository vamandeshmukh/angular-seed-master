'use strict';

const commentUrl = 'https://jsonplaceholder.typicode.com/comments/';

const CommentController = ($scope, $http) => {

    $scope.comments = [];
    $http.get(dataUrl)
        .then((resp) => {
            $scope.blogData = resp.data;
            console.log($scope.blogData);
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







    