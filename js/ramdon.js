function ramdon(start, end) {
    var length = end - start;
    var myorder = new Array();
    var index = 0;
    while (index < length+1) {
    var flag = true;
    var num = parseInt(start + Math.random() * end);
    for (var i in myorder) {
        if (myorder[i] == num) {
                flag = false;
            }
        }
        if (flag == true) {
            myorder[index] = num;
            index++;
        }
    }
    return myorder;
}