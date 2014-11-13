'use strict';

/**
 * @ngdoc function
 * @name nexerciseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nexerciseApp
 */
angular.module('nexerciseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
