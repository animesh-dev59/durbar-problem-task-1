// ==========================================
// 3. Remove Duplicates from Array (ডুপ্লিকেট ভ্যালু বাদ দেওয়া)
// ==========================================
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("3. RemoveDuplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]