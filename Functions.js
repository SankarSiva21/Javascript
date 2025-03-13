function myFuntion(num, num1){ 
    console.log("Hello World! ");
    console.log(num);
    console.log(num1);
}

myFuntion("Siva",22);

(function myFuntion(){ 
    console.log("Hello World! ");
})();

const another = function () {
    console.log("another thing");
}
another();

const arrowFunction = () => {
    console.log("Arraow Function");
}
arrowFunction();

const arrowFunction2 = (args1, args2) => {
    console.log(args1+" "+args2);
    return "Successfull";
}
console.log(arrowFunction2());

const returnFunction = () => {
    console.log("Hello all");
    return "excuted successfully";
}
let result = returnFunction();
console.log(result);