/* -- ^RandomChars (length,current) ------------------------------------------------------------- **
** --  A recursive function to return a string of random characters.                           -- ** 
** ---------------------------------------------------------------------------------------------- */

function RandomChars(length,current) {
    var allowedchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    current = current || '';
    return length ? RandomChars(--length,allowedchars.charAt(Math.floor(Math.random() * allowedchars.length)) + current) : current;
    }
    
(function(global) {
  // Return a useful value based on a passed object's [[Class]] (when possible).
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
        itemConstructor : obj.constructor
        }
  };
}(this));