'use strict';


const LaptopListController = ($scope, $http, $log) => {

    // model - data 
    $scope.empData = {
        eid: 101,
        firstName: 'Sonu',
        salary: 10.25,
        city: 'Chennai',
        isIndian: true,
        phones: [9876543210, 6789012345]
    };


};


angular.module('laptopList', []);

angular
    .module('laptopList')
    .component('laptopList',
        {
            templateUrl: 'laptop-list/laptop-list.template.html',
            // controller 
            controller: LaptopListController
        }
    );




// 'use strict';

// angular.module('laptopList', []);

// angular.
//     module('laptopList').
//     component('laptopList', {
//         templateUrl: 'laptop-list/laptop-list.template.html',
//         controller: function LaptopListController() {

//         }
//     });



