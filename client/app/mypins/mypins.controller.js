'use strict';

angular.module('fcc5pinApp')
  .controller('MypinsCtrl', function ($scope, $http, Auth) {
    $scope.pins = [];

    function getMyPins() {
      $http.get('/api/pins/my').success(function (pins) {
        console.log('pins:', pins);
        $scope.pins = pins;
      });
    }


    $scope.addPin = function () {
      console.log('$scope.title:', $scope.title);
      console.log('$scope.source:', $scope.source);
      if ($scope.source === '') {
        console.log("shit");
        return;
      } else {
        console.log('Current user:', Auth.getCurrentUser());

        $http.post('/api/pins/', {
          title: $scope.title,
          source: $scope.source,
          submitter: Auth.getCurrentUser()._id
        });

        getMyPins();
      }
    };

    getMyPins();
  });
