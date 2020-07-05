function clock(To, time){
    time = time - 1;
    document.title = "页面将在" + time + "秒内跳转";
    if (i > 0) {
        setTimeout("clock1('" + To + "','" +time + "')", 1000);
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
