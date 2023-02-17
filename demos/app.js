angular.module("myApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.name = 'Sonu';
        $scope.empData = { eid: 101, firstName: 'Monu' };
        $scope.myFun = () => {
            alert('fun!');
            return 'fun';
        };
    })
    .directive("myDirective", function () {
        return {
            scope: {
                myName: '@',
                myEmpData: '=',
                getMyFun: '&'
            },
            template: "<div> {{getMyFun()}} {{myName}} {{myEmpData.firstName}} </div>"
        };
    });




// angular.module("myApp", [])
//     .controller("myCtrl", function ($scope) {
//         $scope.name = '';
//     })
//     .directive("myDirective", function () {
//         return {
//             restrict: "E",
//             scope: {
//                 myAttribute: "@",
//                 myBinding: "="
//             },
//             template: "<div>myAttribute: {{myAttribute}}</div><div>myBinding: {{myBinding}}</div>"
//         };
//     });






// var myApp = angular.module('myApp', []);

// myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

//     $scope.myName = 'Sonu';



// }]);

