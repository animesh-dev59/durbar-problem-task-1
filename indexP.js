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


// ==========================================
// 2. Reverse String (স্ট্রিং উল্টো করা)
// ==========================================
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("2. ReverseString:", reverseString("hello")); // "olleh"


// ==========================================
// 3. Remove Duplicates from Array (ডুপ্লিকেট ভ্যালু বাদ দেওয়া)
// ==========================================
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("3. RemoveDuplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


// ==========================================
// 4. Find Max Number (সবচেয়ে বড় সংখ্যা খোঁজা)
// ==========================================
function findMaxNumber(numbers) {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
}
console.log("4. FindMaxNumber:", findMaxNumber([10, 45, 2, 89, 23])); // 89


// ==========================================
// 5. Count Vowels (ভাওয়েল গণনা করা)
// ==========================================
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("5. CountVowels:", countVowels("Programming Hero")); // 5


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


// ==========================================
// 7. Celsius to Fahrenheit (সেলসিয়াস থেকে ফারেনহাইট)
// ==========================================
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("7. CelsiusToFahrenheit:", celsiusToFahrenheit(30)); // 86


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


// ==========================================
// 9. Password Validation (পাসওয়ার্ড ভ্যালিডেশন)
// ==========================================
function isValidPassword(password) {
    const hasLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    return hasLength && hasNumber;
}
console.log("9. IsValidPassword:", isValidPassword("pass1234")); // true


// ==========================================
// 10. Filter Adults from Object Array (বয়স্ক ইউজার ফিল্টার)
// ==========================================
function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

const usersList = [
    { name: "Animesh", age: 22 },
    { name: "Rahim", age: 16 },
    { name: "Karim", age: 19 }
];
console.log("10. GetAdults:", getAdults(usersList)); 
// Output: [ { name: 'Animesh', age: 22 }, { name: 'Karim', age: 19 } ]