function clock1(To){
    i = i - 1;
    document.title = "页面将在" + i + "内跳转";
    if (i > 0) {
        setTimeout("clock1('" + To + "')", 1000);
    } else {
    window.open(To + '.html');
    window.opener = "test";
    window.close();
    window.opener = null;
    window.open('', '_0');
    window.close();
    window.open("about:blank", "_0").close();
    }
}
/*function clock(To, time){
    for(var i = 0; i < time; i++){
        (function(j,To,time){
            setTimeout(function(){
                console.log(i);
                if(j = time){
                    j = 0;
                    window.open(To + '.html');
                    window.opener = "test";
                    window.close();
                    window.opener = null;
                    window.open('', '_0');
                    window.close();
                    window.open("about:blank", "_0").close();
                }
            },j * 1000);
        })(i,To,time)
        console.log('now' + i);
    }
    console.log(i);
}*/
const sleep = (timeout= 1000)=>new Promise((resolve, reject)=>{
    setTimeout(resolve, timeout);
});
let clock = async(timeout)=> {
    for(let i = 0;i<timeout;i++){
        await sleep(1000);
        console.log(i+1);
    }
}
