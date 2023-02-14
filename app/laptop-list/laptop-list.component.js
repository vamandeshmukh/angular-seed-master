'use strict';

angular.module('laptopList', []);

const LaptopListController = ($scope) => {
    $scope.empData = { city: 'Chennai' };
};

angular.
    module('laptopList').
    component('laptopList', {
        templateUrl: 'laptop-list/laptop-list.template.html',
        controller: LaptopListController
    });


    // 'use strict';

// angular.module('laptopList', []);

// angular.
//     module('laptopList').
//     component('laptopList', {
//         templateUrl: 'laptop-list/laptop-list.template.html',
//         controller: function LaptopListController() {

//         }
//     });


