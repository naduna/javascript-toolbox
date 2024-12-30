
// this works similar to Extension Methods

Number.prototype.times = function(callback) {
    const result = [];
    for(let i=0; i<this; i++) { result.push(callback(i)) }
    return result;
};

Number.prototype.times1 = function(callback) {
    return Array.from({length: this}, (_, idx) => callback(idx));
};

String.prototype.times = function(callback) {
    return Number(this).times1(callback);
};

Function.prototype.then = function(callback) {
    return callback.apply(this);
}

/**
 * Mapping from a number to a number. Might have side effects
 * @callback NumberCallback
 * @param  { Number } input
 * @return { Number }
 * @example
 * x => x * x
 */

/**
 * Interface that demands the _times_ method.
 * @typedef ITimes
 * @property { (f:NumberCallback) => Array<Number> } mapTimes - the callback will be use so-many times to produce an array of numbers
 */

/**
 * Intersection type to combine ITimes and Number.
 * @typedef { Number & ITimes} INumber
 */

Number.prototype.mapTimes = function(f) {
    return Array.from({length: this}).map( (_item, index) => f(index) );
};

