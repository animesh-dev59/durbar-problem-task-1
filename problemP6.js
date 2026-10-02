// ==========================================
// 6. Leap Year Check (লিপ ইয়ার চেক করা)
// ==========================================
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year`;
    } else {
        return `${year} is not a Leap Year`;
    }
}
console.log("6. IsLeapYear:", isLeapYear(2024)); // 2024 is a Leap Year