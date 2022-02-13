const reverseString = function(name) {
    let reverseName = "";
    for(let i = name.length-1; i >= 0; i--){
        reverseName = reverseName + name[i];
    }
    return reverseName;
};

// Do not edit below this line
module.exports = reverseString;
