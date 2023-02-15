'use strict';

const WriteBlogController = ($scope, $http) => {

    $scope.newBlog = {};

    $scope.submitBlog = () => {
        $http.post(`${blogUrl}/posts`, $scope.newBlog)
            .then((resp) => {
                console.log($scope.newBlog);
                console.log(resp);
                alert(`Your blog with the title ${$scope.newBlog.title} published succesfully!`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

};

angular.module('writeBlog', []);

angular
    .module('writeBlog')
    .component('writeBlog',
        {
            templateUrl: 'components/write-blog/write-blog.template.html',
            controller: WriteBlogController
        }
    );



