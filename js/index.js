/**
 * Created by ballchen on 2016/8/30.
 */
require(['./js/index-url','angular','jquery','jquery-super-slide','angular-ui-router'],function(URL,angular,$){
    /*-------页面效果js-----------------*/
    $('.tab_qiehuan').hover(function(){
        $(this).children(".bianhuabeijing").css("background-color","#8a8f93").next().css("display","block")
    },function(){
        $(this).children(".bianhuabeijing").css("background-color","#a9aaae").next().css("display","none")
    });
    $(".focusBox").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:500});

    var index = angular.module('index',[]);

    /*学习资源*/
    index.controller('studyResources',['$scope','$http',function($scope,$http){
        $http.get(URL.getStudyResources,[]).success(function(data,status,headers,config){
            $scope.categorys = data;
        }).error(function(data,status,headers,config){

        });
    }]);

    /*实战课程*/
    index.controller('realWarCourse',['$scope','$http',function($scope,$http){
        $http.get(URL.getRealWarCourse,{}).success(function(data,status,headers,config){
            $scope.reaWarCourse = data;
        }).error(function(data,status,headers,config){

        })
    }]);
    /*免费好课*/
    index.controller('freeWellCourse',['$scope','$http',function($scope,$http){
        $http.get(URL.getFreeWellCourse,{}).success(function(data,status,headers,config){
            $scope.freeWellCourses = data;
        }).error(function(data,status,headers,config){

        })
    }]);

    angular.bootstrap(document,['index']);
});
