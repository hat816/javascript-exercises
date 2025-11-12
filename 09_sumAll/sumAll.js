const sumAll = function (a, b) {
    if (a < 0 || b < 0) {
        return "ERROR";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }
    let menor = Math.min(a, b);
    let mayor = Math.max(a, b);
    let suma = 0
    for (let i = menor; i <= mayor; i++) {
        suma += i;
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
