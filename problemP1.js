// ==========================================
// 1. Prime Number Check (প্রাইম বা মৌলিক সংখ্যা চেক)
// ==========================================
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("1. IsPrime:", isPrime(7)); // true
console.log(isPrime(9));