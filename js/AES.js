function Aesin(aes){
    const iv = "1506";
	Random = random(0,1);
    var aeskey = new Array();
    for(var j = 0; j < 4; j++){
        console.log(j);
        aeskey[j] = randomString(16);
    }
	aeskey = ['MmjiI0iLopHyId59','ziE0GT2UqGd2rMv4'];
	for(var i = 0; i < aeskey.length;i++){
        console.log(aeskey[i]);
		aes = CryptoJS.AES.encrypt(aes,aeskey[i],{
            iv:CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
	}

	var Random = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(Random));
    var aeskey = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(aeskey));
	KEY = Random + '$' + aes;
	return KEY;
}

function Aesout(aes){
    const iv = "1506";
    aes = aes.split("$");
    Random = aes[0];
    aes = aes[1];
    Random = CryptoJS.enc.Base64.parse(Random).toString(CryptoJS.enc.Utf8);
    aeskey = ['MmjiI0iLopHyId59','ziE0GT2UqGd2rMv4'];
    i = aeskey.length
    i -= 1
    for(var i = i; i >-1;i--){
        aes = CryptoJS.AES.decrypt(aes, aeskey[i],{
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
       padding: CryptoJS.pad.Pkcs7
    });
    aes = aes.toString(CryptoJS.enc.Utf8)
}
    return aes;
}
