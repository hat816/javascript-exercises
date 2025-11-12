const removeFromArray = function(arr, ...args) {
    //Incluye los elementos que no están en args
    const filterArray = arr.filter(elem => !args.includes(elem))
    return filterArray
};

// Do not edit below this line
module.exports = removeFromArray;
