'use strict';

const dataUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogListController = ($scope, $http) => {

    $scope.blogData = [];

    $http.get(dataUrl)
        // .then((res) => { // res })
        .then(resp => {
            $scope.blogData = resp.data;
            console.log(resp.data);
        })
        .catch(err => console.log(err));




    // $http.post(dataUrl, {})
    //     .then()
    //     .catch();
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

