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
function clock(To, time){
    for(var i = time;i>0;i--){
        setTimeout("",1000);
        console.log(i);
    }
}