const repeatString = function(name, count) {
    if(count < 0){
        return "ERROR"
    }
    let newName = "";
    for(let i = 0; i < count; i++){
        newName = newName + name;
    }
    return newName;
};

// Do not edit below this line
module.exports = repeatString;
