(function() {
  "use strict";

  angular
    .module("ngClassiFieds")
    .controller("classifiedsCtrl", function(
      $scope,
      $http,
      classifiedsFactory,
      $mdSidenav
    ) {
      classifiedsFactory.getClassifieds().then(function(response) {
        $scope.classifieds = response.data;
      });

      $scope.openSidebar = function() {
        $mdSidenav("left").open();
      };

      $scope.closeSidebar = function() {
        $mdSidenav("left").close();
      };

      $scope.saveClassified = function(classified) {
        $scope.classifieds.push(classified);
      };
    });
})();
