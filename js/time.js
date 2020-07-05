function Time(){
    nowtime=new Date();
    year=nowtime.getFullYear();
    month=nowtime.getMonth()+1;
    day=nowtime.getDay();
    date=nowtime.getDate();
    /*date=nowtime.getDate();
    var week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")*/
    time = year+"年"+month+"月"+date+"日 "+nowtime.toLocaleTimeString('chinese',{hour12:false});
    //document.getElementById("time").innerHTML='<time>' + time + '<br><br></time>';
    document.title=time;
}
setInterval("Time()",1000)