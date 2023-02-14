'use strict';

angular.module('phoneList', []);

const myFun = (arg1, arg2, arg3) => {
    console.log('myFun ' + arg1 + arg2 + arg3);
};


const PhoneListController = () => {

    // console.log(myFun(1, 2, 3));
    // console.log(myFun());
    console.log(myFun);

};

angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: PhoneListController

    });





