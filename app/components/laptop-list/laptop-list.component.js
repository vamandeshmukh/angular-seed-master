'use strict';

const LaptopListController = ($scope) => {

    $scope.userData = {
        enteredData: '',
        submittedData: ''
    }

    $scope.showUserData = () => {
        $scope.userData.submittedData = $scope.userData.enteredData;
        console.log($scope.userData.enteredData);
        console.log($scope.userData.submittedData);
    };

    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet. Nexus'
        }

    ];

    // // model - data 
    // $scope.empData = {
    //     eid: 101,
    //     firstName: 'Sonu',
    //     salary: 10,
    //     city: 'Chennai',
    //     isIndian: true,
    //     phones: [9876543210, 6789012345]
    // };


};


angular.module('laptopList', []);

angular
    .module('laptopList')
    .component('laptopList',
        {
            templateUrl: 'components/laptop-list/laptop-list.template.html',
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



