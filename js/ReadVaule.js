function ReadVaule(){
    var thisURL = document.URL;  
    var getval =thisURL.split('?')[1];  
    var key = new Array();
    var keyValue = getval.split('&');
    var value = new Array();
    var get = new Array();
    var back = new Array();
    var showval = "";  
    for(var i = 0;i <keyValue.length;i++){  
        var oneKeyValue = keyValue[i];  
        var oneValue = oneKeyValue.split("=")[1];  
        key[i] = oneValue;
        value[i] = oneKeyValue.split("=")[0];
        get[i] = oneKeyValue;
        showval = showval + oneValue + ";";
    } 
    for(var i = 0;i <keyValue.length;i++){ 
        var oneKeyValue = keyValue[i];   
        this[oneKeyValue.split("=")[0]] = oneKeyValue.split("=")[1];
    }
    back = [key, value, get];
    return back;
}