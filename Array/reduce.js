/*

Source of the polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Polyfill

*/

if(!Array.prototype.reduce){
    
    Array.prototype.reduce = function(callback) {
        'use strict';
        if (this == null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
        value = arguments[1];
        } else {
        while (k < len && !(k in t)) {
            k++; 
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        value = t[k++];
        }
        for (; k < len; k++) {
        if (k in t) {
            value = callback(value, t[k], k, t);
        }
        }
        return value;
    };
}
