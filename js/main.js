$(document).ready(function(){
    time();
    setInterval(time,1000);
    CLS();
    setInterval(CLS,1000);
    $("#main").mousemove(function(){
        var y=event.pageY;
        if(y<=TotalY*0.85){
            setTimeout(function(){
                if(!$("#Time").is(":animated")){
                $("#Time").slideUp(300);
                }
            },0)
        }else if(y>TotalY*0.85){
            setTimeout(function(){
                if(!$("#Time").is(":animated")){
                $("#Time").slideDown(300);
                }
            },0)
        }
        if(y>=TotalY*0.2){
            setTimeout(function(){
                if(!$("#ct").is(":animated")){
                $("#ct").fadeOut(500);
                }
            },0)
        }else if(y<=TotalY*0.2){
            setTimeout(function(){
                if(!$("#ct").is(":animated")){
                $("#ct").fadeIn(500);
                }
            },0)
        }
    })
})
var TotalY=$(document).height();
function time() {
    var mydate = new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth()+1;
    var date=mydate.getDate();
    var day=mydate.getDay();
    var hour=mydate.getHours();
    var minute=mydate.getMinutes();
    var second=mydate.getSeconds();
    var Week = ['日','一','二','三','四','五','六'];
    if(second<10){
        second="0"+second;
    }
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    var FullT=year+"年"+month+"月"+date+"日"+"  "+"星期"+Week[day]+"  "+hour+":"+minute+":"+second;
    $("#Time").text(FullT);
}

var Class=new Array(7);
Class[0]="./html/Empty.html";
Class[1]="./html/Monday.html";
Class[2]="./html/Tuesday.html";
Class[3]="./html/Wednesday.html";
Class[4]="./html/Thursday.html";
Class[5]="./html/Friday.html";
Class[6]="./html/Empty.html";
var Temporary=-1;
function CLS(){
    var mydate = new Date();
    var Day=mydate.getDay();
    if(Temporary!=Day){
        $("#ct").attr("data",Class[Day]);
        Temporary=Day;
    }
}