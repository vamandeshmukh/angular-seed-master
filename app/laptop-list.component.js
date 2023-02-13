'use strict';

angular
  .module('phonecatApp')

  .component('laptopList', {
    template:

      'This is my name',

    controller: function LaptopListController() {
      this.laptops = [];
    }
  });
