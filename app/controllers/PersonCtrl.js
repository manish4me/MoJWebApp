'use strict';

(function () {
    var addressBookApp = angular.module("addressBookApp");

    var PersonCtrl = function ($scope, $http, $location, $routeParams)
    {

        (function initController() {

            $scope.personName = $routeParams.personname;
                if($routeParams.personname == null)
                    loadCountries();
        })()

        function  loadCountries() {

            $http.get('https://restcountries.eu/rest/v1/region/Europe')
                .then(function processCountries (response) {
                    
                    $scope.countries = response.data;
                    //console.log(response.data);
                }, onError);
            console.log('Response received...');
            
        }

    	$scope.working = 'Angular is Working';
        //common error function
    	var onError = function (error) {
            $scope.error = error.data;
        };
        //end error function

        //add new person
        var onAddPersonCompleted = function(response){
            $location.path('/thankyou/' + $scope.person.name);
        };

        $scope.addPerson = function(person){
            person.dateCreated = new Date();
            $http.post('/addPerson', person)
                    .then(onAddPersonCompleted, onError);
            //console.log(person);
        };
        //end add new person
    }
    addressBookApp.controller('PersonCtrl', PersonCtrl);
}());