var gridster;
    $(function(){
        gridster = $(".gridster ul").gridster({    //通过jquery选择DOM实现gridster
            widget_base_dimensions: [100, 120],    //模块的宽高 [宽,高]
            widget_margins: [5, 5],    //模块的间距 [上下,左右]
//            draggable: {
//                handle: '.con'    //模块内定义拖动的元素<header>，这里也支持jquery选择器，如"span.drag_handle"
//            }
            draggable:{
                start: function(event, ui){

                    console.log("start");
                },
                drag:function(event, ui){
                    console.log("drag");
                },
                stop: function(event, ui){
                    console.log("stop");
                }
            }
        }).data('gridster');
    });
    $("#save").click(function () {
        var title=document.getElementById("title").value;
        var xAxis=document.getElementById('xAxis').value;
        var yAxis=document.getElementById('yAxis').value;
    var socket=io.connect('http://localhost:3000');
    var msg={};
    msg.title=title;
    msg.yAxis=yAxis;
    //msg.xAxis=xAxis;
    socket.emit('chartmsg',msg);
    socket.on('test',function (data) {
        var json=data;
        var li=gridster.add_widget('<li class="con">The HTML of the widget...</li>', 4, 2);
        $(li).highcharts(json);
    });
});