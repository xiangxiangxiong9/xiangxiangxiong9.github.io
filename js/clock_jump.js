function clock(To, time){
    time = time - 1;
    document.title = "页面将在" + time + "秒内跳转";
    if (time > 0) {
        setTimeout("clock('" + To + "','" +time + "')", 1000);
    } else {
    /*window.open(To + '.html');
    window.opener = "test";
    window.close();
    window.opener = null;
    window.open('', '_0');
    window.close();
    window.open("about:blank", "_0").close();*/
    window.location.href=To
    }
}
