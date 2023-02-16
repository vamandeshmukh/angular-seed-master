angular.module('blogService', []);

angular.module('blogService')
    .factory('blogApis', ($http) => {

        const blog = {};

        blog.getBlogs = () => {
            return $http.get('https://jsonplaceholder.typicode.com/posts/');
        };

        // create other services 

        // blog.getBlogs = () => {
        //     return $http.get('https://jsonplaceholder.typicode.com/posts/');
        // };

        return blog;
    });