'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});


// angular.module('myApp', []);

// angular.module('myApp')
//   .controller('MyAppController',

//     function MyAppController($scope) {

//       $scope.myName = 'Vaman';

//     }
//   );



// // let myApp = angular.module('myApp', []);

// // myApp.controller('MyAppController',

// //   function MyAppController($scope) {

// //     $scope.myName = 'Vaman';

// //   }
// // );




// // 'use strict';

// // // Declare app level module which depends on views, and core components
// // angular.module('myApp', [
// //   'ngRoute',
// //   'myApp.view1',
// //   'myApp.view2',
// //   'myApp.version'
// // ]).
// // config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
// //   $locationProvider.hashPrefix('!');

// //   $routeProvider.otherwise({redirectTo: '/view1'});
// // }]);
