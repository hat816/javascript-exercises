const repeatString = function (cadena, num) {
    let resultado = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
       resultado += cadena;
    }

     return resultado;
};

// Do not edit below this line
module.exports = repeatString;
