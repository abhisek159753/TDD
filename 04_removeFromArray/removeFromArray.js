const removeFromArray = function(arr) {
    
    let args = Array.prototype.slice.call(arguments[1]);
    let slicedArr
    for(let i = 0; i <= args.length; i--){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === args[i]){

            }
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
