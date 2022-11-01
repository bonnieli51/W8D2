// myEach

const callback = function(el) {
    console.log(el);
};

Array.prototype.myEach = function(callback) {

    for(let i=0; i < this.length; i++) {
        callback(this[i]);
    }

    return undefined

};

const array = [1, 2, 2, 3, 3, 3];

// array.myEach(callback);




// myMap

const doubler = function (el) {
    return (el * 2);
};

Array.prototype.myMap = function (callback) {
    let mapped = [];

    this.myEach(function(el) {
        mapped.push(callback(el))
    });

    return mapped;
};

// const array2 = [1, 2, 2, 3, 3, 3];

console.log(array.myMap(doubler));