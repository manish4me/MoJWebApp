'use strict';

(function () {
    var app = angular.module("addressBookApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/person", {
            templateUrl: 'app/views/person.html',
            controller: "PersonCtrl"
        })
        .when("/thankyou/:personname", {
            templateUrl: 'app/views/thankyou.html',
            controller: "PersonCtrl"
        })
        .otherwise({ redirectTo: "/person" })
    });
}());
