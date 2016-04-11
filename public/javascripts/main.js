
//main.js
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
            },
            resize: {
                enabled: true
                //handle_class: 'con'

            }
        }).data('gridster');
    });
    $("#save").click(function () {
        var title_text=document.getElementById("title").value;
        var xAxis_text=document.getElementById('xAxis').value;
        var yAxis_text=document.getElementById('yAxis').value;
        var channel=document.getElementById('msgid').value;
        var li=gridster.add_widget('<li class="con"></li>', 4, 2);


//        var div=$('<div></div>', {
//            id: 'mark',
//            width:"100%",
//            height:20+'px'
//            //background:"#ffffff"
//        }).appendTo($(li));
//        $(div).css("background-color","rgb(96,96,96)");
//        var describe=$('<span></span>',{
//            id:'describe',
//            width:10+'px',
//            height:10+'px',
//            class:'glyphicon glyphicon-info-sign',
//            float:'right'
//        }).appendTo($(div));
//        var close=$('<span></span>',{
//            id:'close',
//            width:10+'px',
//            height:10+'px',
//            class:'glyphicon glyphicon-remove-sign',
//            float:'right'
//        }).appendTo($(div));
        var div=$('<div></div>', {
            id: 'drawchart',
            margin:10+"px",
            width:"100%",
            height:"100%",
            background:"#ffffff"
        }).appendTo($(li));
        $(div).css("background-color","green");
        var socket=io.connect('http://localhost:3000');
    var msg={};
    msg.channel=channel;
    socket.emit('chartmsg',msg);
    socket.on('pushData',function (data) {
         var payload=data;
         payload.title.text=title_text;
        if(payload.yAxis)
        {
            payload.yAxis.title.text=yAxis_text;
        }
        console.log(payload);
        $(div).highcharts(payload);
    });
});


