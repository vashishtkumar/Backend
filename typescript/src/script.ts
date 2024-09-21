console.log("hello vashisht");
let a=10;

let start=(x:number,y:number):number=>{
    //console.log("x+y ", x+y);
    return x+y;
}

console.log("returned value is " ,start(9,10));

function print(x:number,y?:number):number{
//console.log("another sum is ",x+y);
return x+(y??0);
}

console.log("second returned is " +print(8));