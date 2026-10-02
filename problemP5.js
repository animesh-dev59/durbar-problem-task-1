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
console.log(countVowels('animesh'));