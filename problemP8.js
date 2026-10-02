// ==========================================
// 8. FizzBuzz Problem (ফিজবাজ গেম লজিক)
// ==========================================
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}
console.log("8. FizzBuzz:", fizzBuzz(5)); // [1, 2, "Fizz", 4, "Buzz"]