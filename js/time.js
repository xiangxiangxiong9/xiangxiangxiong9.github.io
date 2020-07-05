/*var d=new Date();   
var year=d.getFullYear()  //获取年
var month=d.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
var day=d.getDay()    //获取日
var days=d.getDate() //获取日期
var hour=d.getHours()   //获取小时
var minute=d.getMinutes()  //获取分钟
var second=d.getSeconds()   //获取秒
				
if(month<10) month="0"+month
if(days<10) days="0"+days
if(hour<10) hour="0"+hour
if(minute<10) minute="0"+minute
if(second<10) second="0"+second
				
var week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
var Tools=document.getElementById("Main")
var da=year+" 年 "+month+" 月 "+days+" 日 "+week[day]+" "+hour+" : "+minute+" :"+second
document.getElementById("time").innerHTML = "当前时间: " + da*/
function Time(){
    nowtime=new Date();
    year=nowtime.getFullYear();
    month=nowtime.getMonth()+1;
    date=nowtime.getDate();
    document.getElementById("mytime").innerText=year+"年"+month+"月"+date+" "+nowtime.toLocaleTimeString();
}

setInterval("Time()",1000);
Time();