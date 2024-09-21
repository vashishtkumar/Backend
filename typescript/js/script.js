"use strict";
console.log("hello vashisht");
let a = 10;
let start = (x, y) => {
    //console.log("x+y ", x+y);
    return x + y;
};
console.log("returned value is ", start(9, 10));
function print(x, y) {
    //console.log("another sum is ",x+y);
    return x + (y !== null && y !== void 0 ? y : 0);
}
console.log("second returned is " + print(8));
