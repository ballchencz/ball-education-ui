/**
 * Created by ballchen on 2016/11/8 0008.
 */
layui.use(['jquery', 'form'], function(){
    var form = layui.form(); //只有执行了这一步，部分表单元素才会修饰成功
    var $ = layui.jquery;
    $(function(){
        setInterval(function(){
            var visibleLi = $(".pic").children(":visible");
            var visibleIndex = visibleLi.next().index();
            if(visibleIndex!=-1){
                visibleLi.hide();
                visibleLi.next().show();
            }else{
                $(".pic").children().hide();
                $(".pic").children(":first").show();
            }
        }, 3000);
        $(".prev").bind("click",function(){
            var visibleLi = $(".pic").children(":visible");
            var visibleIndex = visibleLi.next().index();
            if(visibleIndex!=-1){
                visibleLi.hide();
                visibleLi.next().show();
            }else{
                $(".pic").children().hide();
                $(".pic").children(":first").show();
            }
        });
        $(".next").bind("click",function(){
            var visibleLi = $(".pic").children(":visible");
            var visibleIndex = visibleLi.prev().index();
            if(visibleIndex==-1){
                $(".pic").children().hide();
                $(".pic").children(":last").show();
            }else{
                visibleLi.hide();
                visibleLi.prev().show();
            }
        });
        /*显示播放按钮*/
        $(".homeWork").hover(function(){
           $(this).children("img").css("visibility","visible");
        },function(){
            $(this).children("img").css("visibility","hidden");
        });
    })
});
