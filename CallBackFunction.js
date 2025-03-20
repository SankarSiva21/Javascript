function square(num){
    return num*num;
}

function callBackFunction(number, callBack, functionName){
    if(!callBack) return number;
    else {
        return functionName(number);
    }
}
const result = callBackFunction(20,true,square);
console.log(result);

console.log(callBackFunction(200,true,(num) => num/2 ));
