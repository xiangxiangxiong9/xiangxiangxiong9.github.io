function clock(To, time){
    for(var i = time; i > 0; i--){
        (function(i){
            setTimeout(function(){
                console.log(i);
                if(i = time){
                    window.open(To + '.html');
                    window.opener = "test";
                    window.close();
                    window.opener = null;
                    window.open('', '_0');
                    window.close();
                    window.open("about:blank", "_0").close();
                }
            },i * 1000);
        })(i,To,time)
    }
}