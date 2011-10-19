/* -- ^RandomChars (length,current) ------------------------------------------------------------- **
** --  A recursive function to return a string of random characters.                           -- ** 
** ---------------------------------------------------------------------------------------------- */

function RandomChars(length,current) {
    var allowedchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    current = current || '';
    return length ? RandomChars(--length,allowedchars.charAt(Math.floor(Math.random() * allowedchars.length)) + current) : current;
    }
    
(function(global) {
  Object.toType = function(obj) {
    var key;
    // If the object is null, return "Null" (IE <= 8)
    return obj === null ? { itemType : "Null" }
      // If the object is undefined, return "Undefined" (IE <= 8)
      : obj == null ? { itemType : "Undefined" }
      // If the object is the global object, return "Global"
      : obj === global ? { itemType : "Global" }
      // Otherwise return the XXXXX part of the full [object XXXXX] value, from
      // cache if possible.
      : {
        itemType : ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1],
        objectType : (obj.constructor && (obj.constructor.toString().match(/\s*function (.*)\(/))) ? obj.constructor.toString().match(/\s*function (.*)\(/)[1] : undefined,
        domType : (obj.jquery) ? 'jQuery' : ((obj.nodeType) ? 'DOM' : undefined)
        }
  };
}(this));