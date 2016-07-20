angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){
  $scope.id = $stateParams.id;

  for (var i = 0; i < mainSrv.travelInfo.length; i++) {
    if (mainSrv.travelInfo[i]["id"].toString() === $stateParams.id) {
      $scope.currentObj = mainSrv.travelInfo[i];
    }
  }
});
