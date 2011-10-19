function RandomChars(length,current){
    var allowedchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    current = current || '';
    return length ? RandomChars( --length , allowedchars.charAt( Math.floor( Math.random() * allowedchars.length ) ) + current ) : current;
    }