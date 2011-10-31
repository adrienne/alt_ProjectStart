/* -- ^RandomChars (length,current) ------------------------------------------------------------- **
** --  A recursive function to return a string of random characters.                           -- ** 
** ---------------------------------------------------------------------------------------------- */

var ALTutils = ALTutils || {};  // Declare a namespace^

(function(global) { // Begin anonymous function, passing in a context (which will be the global object)

    var that = this;    // Minimize inconsistent behavior of this

/* -- ALTutils.RandomChars^ (length NUMBER , current STRING) ------------------------------------ **
** --    returns: STRING                                                                       -- **
** -- A recursive function to return a string of random characters.                            -- ** 
** -- Pass the number of characters you want to length; do not pass a value to current.        -- **
** ---------------------------------------------------------------------------------------------- */
    ALTutils.RandomChars = function (length,current) {
        var allowedchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
        current = current || '';
        return length ? this.RandomChars(--length,allowedchars.charAt(Math.floor(Math.random() * allowedchars.length)) + current) : current;
        };

/* --  ALTutils.isType^ (obj OBJECT) ------------------------------------------------------------ **
** --     returns: OBJECT { itemType: STRING, objectType: STRING(*), domType: STRING(*)        -- **
** --                                                     (*): may also be UNDEFINED!          -- **
** --  A function to return more useful type information about a variable (replaces typeOf)    -- ** 
** --  Pass in an object or variable.                                                          -- ** 
** ---------------------------------------------------------------------------------------------- */
    ALTutils.isType = function(obj) {
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
            /* TODO: there's a bug in objectType */
            objectType : (obj.constructor && (obj.constructor.toString().match(/\s*function (.*)\(/))) ? obj.constructor.toString().match(/\s*function (.*)\(/)[1] : null,
            domType : (obj.jquery) ? 'jQuery' : ((obj.nodeType) ? 'DOM' : null)
            }
        };
        
        
    }(this));   // End our anonymous function, passing in the global object (as this)