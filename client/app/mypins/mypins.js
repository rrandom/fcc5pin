'use strict';

angular.module('fcc5pinApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mypins', {
        templateUrl: 'app/mypins/mypins.html',
        controller: 'MypinsCtrl'
      });
  });
