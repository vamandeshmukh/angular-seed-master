const blogService = angular.module('blogService', []);

const apiUrl = 'https://jsonplaceholder.typicode.com';

blogService.factory('blogApis', ['$http', ($http) => {

    const blog = {};

    blog.getAllBlogs = () => {
        return $http.get(`${apiUrl}/posts`);
    };

    // create other services 

    blog.getBlogById = (blogId) => {
        return $http.get(`${apiUrl}/posts/${blogId}`);
    };

    blog.getBlogByTitle = (blogTitle) => {
        return $http.get(`${apiUrl}/posts?title=${blogTitle}`);
    };

    blog.writeBlog = (blogPost) => {
        return $http.post(`${apiUrl}/posts/`, blogPost);
    };

    return blog;

}]);