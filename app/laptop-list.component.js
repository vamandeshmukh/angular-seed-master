'use strict';

angular.
  module('phonecatApp').
  component('laptopList', {
    template:
        '<ul>' +
          '<li ng-repeat="laptop in $ctrl.laptops">' +
            '<span>{{laptop.name}}</span>' +
            '<p>{{laptop.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function LaptopListController() {
      this.laptops = [
        {
          name: 'Dell Inspiron',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Lenovo',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'Apple Air',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
