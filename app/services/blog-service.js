
let blogService = angular.module('blogService', []);

const backendUrl = 'https://jsonplaceholder.typicode.com';

blogService.factory();

blogService.config(($http) => {

    const getAllBlogs = () => {
        return $http.get(`${backendUrl}/posts`);
    }


});
