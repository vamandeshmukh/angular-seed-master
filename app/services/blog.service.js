const blogService = angular.module('blogService', []);

const apiUrl = 'https://jsonplaceholder.typicode.com';

blogService.factory('blogApis', ['$http' , ($http) => {

    const blog = {};

    blog.getAllBlogs = () => {
        return $http.get(`${apiUrl}/posts`);
    };

    // create other services 

    return blog;
}]);