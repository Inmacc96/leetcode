var addDigits = function(num) {
    let arrayOfDigits = Array.from(String(num), Number);
    while(arrayOfDigits.length !=1){
        suma = arrayOfDigits.reduce((a,b) => a+b);
        arrayOfDigits = Array.from(String(suma),Number);
    }
    return arrayOfDigits[0]
};