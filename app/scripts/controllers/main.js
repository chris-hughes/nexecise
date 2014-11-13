'use strict';

/**
 * @ngdoc function
 * @name nexerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nexerciseApp
 */
angular.module('nexerciseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
