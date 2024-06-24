const sumAll = function(num1, num2) {
    let finalSum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1,num2);
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    for(let i = start; i <= end; i++){
        finalSum += i;
        console.log(finalSum);
    }
    return finalSum;
};
sumAll(1,5)
// Do not edit below this line
module.exports = sumAll;
