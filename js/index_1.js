/**
 * Created by ballchen on 2016/11/8 0008.
 */
layui.use(['jquery', 'form'], function(){
    var form = layui.form(); //ֻ��ִ������һ�������ֱ�Ԫ�زŻ����γɹ�
    var $ = layui.jquery;
    $(function(){
        $(".prev").bind("click",function(){
            /*��������ֲ�ͼ����*/
            var picLength = $(".carousel .pic").children().length;
            console.log($(".carousel .pic").children());
        });
        $(".next").bind("click",function(){
            alert(2);
        });
    })
});
