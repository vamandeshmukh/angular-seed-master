'use strict';

const dataUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogListController = ($scope, $http) => {

    
    
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

