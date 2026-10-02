// ==========================================
// 9. Password Validation (পাসওয়ার্ড ভ্যালিডেশন)
// ==========================================
function isValidPassword(password) {
    const hasLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    return hasLength && hasNumber;
}
console.log("9. IsValidPassword:", isValidPassword("pass1234")); // true