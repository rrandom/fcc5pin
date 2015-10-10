'use strict';

angular.module('fcc5pinApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.pins = [];

    $http.get('/api/pins').success(function(pins) {
      $scope.pins = pins;
    });

  });
