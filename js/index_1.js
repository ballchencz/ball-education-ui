/**
 * Created by ballchen on 2016/11/8 0008.
 */
layui.use(['jquery', 'form'], function(){
    var form = layui.form(); //只有执行了这一步，部分表单元素才会修饰成功
    var $ = layui.jquery;
    $(function(){
        $(".prev").bind("click",function(){
            /*获得所有轮播图数量*/
            var picLength = $(".carousel .pic").children().length;
            console.log($(".carousel .pic").children());
        });
        $(".next").bind("click",function(){
            alert(2);
        });
    })
});
