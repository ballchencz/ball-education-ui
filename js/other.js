/**
 * Created by ballchen on 2016/8/30.
 */
require(['angular','angular-async-loader'],function(angular,asyncLoader){
    var other = angular.module('other',[]);
    /*angular.bootstrap(document,['other']);*/
    /*other controller*/
    other.controller('otherController',['$scope',function($scope){
        $scope.templates = [{name:'includeOther',url:'./other-include.html'}];
        $scope.template = $scope.templates[0]
    }]);

});
