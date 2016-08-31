/**
 * Created by ballchen on 2016/8/30.
 */

var index = angular.module('index',[]);
index.controller('otherController',['$scope',function($scope){
    $scope.templates = [{name:"other",url:"./other-include.html"}];
    $scope.template = $scope.templates[0];
}]);
