function checkMathOperationsForNine(a, b) {
    const sum = a + b;
    const diff = a - b;
    const product = a * b;
    const quotient = a / b;

    if (sum === 9 || diff === 9 || product === 9 || quotient === 9) {
        return "Nine";
    } else {
        return "Nein";
    }
}
console.log(checkMathOperationsForNine(1,3))