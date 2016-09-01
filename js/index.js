/**
 * Created by ballchen on 2016/8/30.
 */
require(['./js/index-url','angular','jquery','jquery-super-slide','angular-ui-router'],function(URL,angular,$){

    var index = angular.module('index',[]);

    /*循环完成filter*/
    index.directive('onFinishRenderFilters', function ($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        };
    });
    /*课程分类*/
    index.controller('courseCategory',['$scope','$http',function($scope,$http){
        $http.get(URL.getCourseCategory,[]).success(function(data,status,headers,config){
            $scope.courseCategorys = data;
        }).error(function(data,status,headers,config){
        });
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            //渲染完成，加载事件
            $('.tab_qiehuan').hover(function(){
                $(this).children(".bianhuabeijing").css("background-color","#8a8f93").next().css("display","block")
            },function(){
                $(this).children(".bianhuabeijing").css("background-color","#a9aaae").next().css("display","none")
            });
        });
    }]);

    /**
     * 轮播图
     */
    index.controller('cyclePicture',['$scope','$http',function($scope,$http){
        $http.get(URL.getCyclePicture,[]).success(function(data,status,headers,config){
            $scope.cyclePictures = data;
        }).error(function(data,status,headers,config){
        });
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            console.log($(".focusBox"))
            //渲染完成，加载事件
            $(".focusBox").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:500});
        });
    }]);


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
    /*-------页面效果js-----------------*/
/*    $('.tab_qiehuan').hover(function(){
        alert(1);
        $(this).children(".bianhuabeijing").css("background-color","#8a8f93").next().css("display","block")
    },function(){
        alert(12);
        $(this).children(".bianhuabeijing").css("background-color","#a9aaae").next().css("display","none")
    });
    $(".focusBox").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:500});*/
/*    $('.tab_qiehuan').on("mouseover mouseout",function(event){
        console.log(event);
        if(event.type == "mouseover"){
            //鼠标悬浮
            console.log("mouseover")
        }else if(event.type == "mouseout"){
            //鼠标离开
            console.log("mouseover")
        }
    });*/
});
