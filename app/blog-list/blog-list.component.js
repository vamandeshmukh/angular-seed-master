'use strict';

const dataUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogListController = ($scope, $http) => {

    $http.get(dataUrl)
        .then(resp => console.log(resp.data))
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

