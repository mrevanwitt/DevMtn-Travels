angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
  $scope.info = mainSrv.travelInfo;
});
