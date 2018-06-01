(function() {
  "use strict";

  angular
    .module("ngClassiFieds")
    .factory("classifiedsFactory", function($http) {
      function getClassifieds() {
        return $http.get("data/classifieds.json");
      }

      return {
        getClassifieds: getClassifieds
      };
    });
})();
