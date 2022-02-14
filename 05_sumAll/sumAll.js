const sumAll = function(first, last) {
    if(typeof first != "number" || typeof last != "number" ||
        first < 0 || last < 0){
        return "ERROR";
    }
    let minNum = 0;
    let maxNum = 0;
    let sum = 0;
    if(first <= last){
        minNum = first;
        maxNum = last;
    }
    else{
        minNum = last;
        maxNum = first;
    }
    for(let i = minNum; i<= maxNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
