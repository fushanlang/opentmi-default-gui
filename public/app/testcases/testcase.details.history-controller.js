'use strict';

angular.module('OpenTMIControllers')
  .controller('TestcaseHistoryController', 
             ['$scope', '$stateParams', '$log', 
    function ($scope,    $stateParams,    $log) {
  
    $log.info('init TestcaseHistoryController');
    
    $scope.history = { count: "?", passrate: "?" };

    $scope.$watch('testcase.id',function(val){
      console.log(val);
    }, true);
  }]);