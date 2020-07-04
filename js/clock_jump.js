function clock(To){
    i=i-1
    document.title= "页面将在" + i + "内跳转"
    if(i>0){
     setTimeout("clock()",1000);
    }else{
        window.open(To + '.html');
        window.opener = "test";
        window.close();
        window.opener=null;
        window.open('','_self');
        window.close();
        window.open("about:blank","_self").close();
    }
}