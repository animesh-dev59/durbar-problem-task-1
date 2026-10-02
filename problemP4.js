// ==========================================
// 4. Find Max Number (সবচেয়ে বড় সংখ্যা খোঁজা)
// ==========================================
function findMaxNumber(numbers) {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
}
console.log("4. FindMaxNumber:", findMaxNumber([10, 45, 2, 89, 23])); // 89