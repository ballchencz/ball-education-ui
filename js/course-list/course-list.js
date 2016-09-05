/**
 * Created by ballchen on 2016/9/5.
 */
require(['./js/course-list/course-list-url','angular','jquery','jquery-super-slide','angular-ui-router'],function(URL,angular,$){
    var courseList = angular.module("courseList",[]);
    courseList.controller('courseCategoryController',['$scope','$http',function($scope,$http){
        //获得第一级分类
        $http.get(URL.getCourseCategoryById,[]).success(function(data,status,headers,config){
            $scope.rootCategorise = data;
        }).error(function(data,status,headers,config){});
        var categoryId = $("#categoryId").val();
        /*如果没有categoryID,选中全部*/
        if(!categoryId){
            $("#unlimit").addClass("on");
                /*根据参数获得课程数据*/
                $.get(URL.getCoursePaginationByCourseCategory,{},function(data){
                    var courseArray = [];
                for(var i=0;i<data.length;i++){
                    var course = data[i];
                    var courseTempDiv = $('#courseTempDiv');
                    //设置课程背景
                    if(course.imgUrl){
                        courseTempDiv.find("#courseBg").attr('src',course.imgUrl);
                    }
                    //设置课程标题
                    if(course.title){
                        courseTempDiv.find("#courseTitle").text(course.title);
                    }
                    //设置课程简介
                    if(course.courseIntro){
                        courseTempDiv.find("#courseIntro").text(course.courseIntro);
                    }
                    //设置课程价格
                    if(course.price){
                        courseTempDiv.find("#coursePrice").text(course.price);
                    }
                    //设置课程学习人数
                    if(course.person){
                        courseTempDiv.find("#coursePerson").text(course.person);
                    }
                    //拷贝课程至显示div
                    var courseTempDiv = courseTempDiv.clone(true);
                    courseArray.push(courseTempDiv);
                }
                    //courseTempDiv.appendTo("#courseContainer");
                    for(var j=0;j<courseArray.length;j++){
                        $("#courseContainer").append(courseArray[j]);
                    }
                    $("#courseContainer").children().show();
                });
        }else{

        }

    }]);

    angular.bootstrap(document,['courseList']);

})