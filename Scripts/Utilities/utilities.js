/* -- ^RandomChars (length,current) ------------------------------------------------------------- **
** --  A recursive function to return a string of random characters.                           -- ** 
** ---------------------------------------------------------------------------------------------- */

function RandomChars(length,current) {
    var allowedchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    current = current || '';
    return length ? RandomChars(--length,allowedchars.charAt(Math.floor(Math.random() * allowedchars.length)) + current) : current;
    }
    
(function(global) {
  // Maintain a map of already-encountered types for super-fast lookups. This
  // serves the dual purpose of being an object from which to use the function
  // Object.prototype.toString for retrieving an object's [[Class]].
  var types = {};

  // Return a useful value based on a passed object's [[Class]] (when possible).
  Object.toType = function(obj) {
    var key;
    // If the object is null, return "Null" (IE <= 8)
    return obj === null ? "Null"
      // If the object is undefined, return "Undefined" (IE <= 8)
      : obj == null ? "Undefined"
      // If the object is the global object, return "Global"
      : obj === global ? "Global"
      // Otherwise return the XXXXX part of the full [object XXXXX] value, from
      // cache if possible.
      : types[key = types.toString.call(obj)] || (types[key] = (key.constructor || key.match(/\s([a-zA-Z]+)/)[1]));
  };
}(this));