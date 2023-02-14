'use strict';

angular
  .module('phonecatApp')

  .component('laptopList', {
    template:

      'This is my name {{salary}}',

    controller: function LaptopListController($scope) {
      this.laptops = [];

      $scope.salary = 10.5;
    }
  });

  