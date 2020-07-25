function Aesin(aes){
    const iv = "1506";
	Random = random(0,15);
    function randomString(len){
        len = len || 32;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for(i = 0;i < len; i++){
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
    var aeskey = new Array();
    for(var j = 0; j < 4; j++){
        console.log(j);
        aeskey[j] = randomString(16);
    }
	//aeskey = ['MmjiI0iLopHyId59','ziE0GT2UqGd2rMv4','IJPeAFisFKnjbdO1','8D7vYidbSMKEqq97','aBTZBrzrbMOZGner','pxjdGBHZxXtpFhEx','9KUVYuNSvVIHBTqs','cSK1Tm3MDY2PhLvy','FeiRmuoMswCP660t','QMCr8aZ3An4EG2Ha','tmifTH5vKxLSCSlf','cbTQIfmXBMlu2loO','ZTPwnCxr16PsUfgv','vZw91QK4MGeq0JrO','04KBETBdK1KjQfN6','VnERJcrK4UHTG0kO','q4jz2KirAOzapcLS','dZbLYYoMv5a8AcHm','sqBOdhHI9rA9ti0Y','2Chcl0KiW0otcKI6','FnMoBBvSsuyWbjhE','lqxWj69Ekj9UVLSR','7uGJJtCvDuseDwC2','KxBeIB3dWDo61EDu','6AudDCSSApqtXEHk','Ahp0B1yJVCIPxNnl','NRmQf9JNRVERpcSA','3VIK3XfeD93zgNA9','oO9XmCi7SGs8vstC','kzTscibV3AbaF7jx','BZTNCSDb5RzFubND','kOt0F0s9Mo1jpsLG'];
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
	KEY = '$AES$' + Random + '$' + aeskey + '$' + aes;
	return KEY;
}

function Aesout(aes){
    const iv = "1506";
    aes = aes.split("$");
    Random = aes[2];
    aeskey = aes[3];
    aes = aes[4];
    Random = CryptoJS.enc.Base64.parse(Random).toString(CryptoJS.enc.Utf8);
    aeskey = CryptoJS.enc.Base64.parse(aeskey).toString(CryptoJS.enc.Utf8);
    aeskey = aeskey.split(",");
    //aeskey = ['MmjiI0iLopHyId59','ziE0GT2UqGd2rMv4','IJPeAFisFKnjbdO1','8D7vYidbSMKEqq97','aBTZBrzrbMOZGner','pxjdGBHZxXtpFhEx','9KUVYuNSvVIHBTqs','cSK1Tm3MDY2PhLvy','FeiRmuoMswCP660t','QMCr8aZ3An4EG2Ha','tmifTH5vKxLSCSlf','cbTQIfmXBMlu2loO','ZTPwnCxr16PsUfgv','vZw91QK4MGeq0JrO','04KBETBdK1KjQfN6','VnERJcrK4UHTG0kO','q4jz2KirAOzapcLS','dZbLYYoMv5a8AcHm','sqBOdhHI9rA9ti0Y','2Chcl0KiW0otcKI6','FnMoBBvSsuyWbjhE','lqxWj69Ekj9UVLSR','7uGJJtCvDuseDwC2','KxBeIB3dWDo61EDu','6AudDCSSApqtXEHk','Ahp0B1yJVCIPxNnl','NRmQf9JNRVERpcSA','3VIK3XfeD93zgNA9','oO9XmCi7SGs8vstC','kzTscibV3AbaF7jx','BZTNCSDb5RzFubND','kOt0F0s9Mo1jpsLG'];
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