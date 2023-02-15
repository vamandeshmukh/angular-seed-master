'use strict';

const dataUrl = 'https://jsonplaceholder.typicode.com/posts/';

const BlogListController = ($scope, $http) => {

    $scope.blogData = [];
    $http.get(dataUrl)
        .then((resp) => {
            $scope.blogData = resp.data;
            console.log($scope.blogData);
        })
        .catch((err) => {
            console.log(err);
        });
};

angular.module('blogList', []);

angular
    .module('blogList')
    .component('blogList',
        {
            templateUrl: 'components/blog-list/blog-list.template.html',
            controller: BlogListController
        }
    );






    // 'use strict';

// const dataUrl = 'https://jsonplaceholder.typicode.com/posts/';

// const BlogListController = ($scope, $http) => {

//     $scope.blogData = [];
//     $scope.blogId = '';
//     $scope.currentBlog = {};

//     $scope.searchAllBlogs = () => {
//         $http.get(dataUrl)
//             .then((resp) => {
//                 $scope.blogData = resp.data;
//                 console.log(resp.data);
//                 $scope.blogId = '';
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     $scope.searchBlogById = () => {
//         $http.get(dataUrl + $scope.blogId)
//             .then((resp) => {
//                 $scope.currentBlog = resp.data;
//                 console.log(resp.data);
//             })
//             .catch((err) => {
//                 alert(`Blog with the id ${$scope.blogId} was not found!`);
//                 console.log(err);
//                 $scope.blogId = '';
//                 $scope.currentBlog = {};
//             });
//     };
// };

// angular.module('blogList', []);

// angular
//     .module('blogList')
//     .component('blogList',
//         {
//             templateUrl: 'blog-list/blog-list.template.html',
//             controller: BlogListController
//         }
//     );



