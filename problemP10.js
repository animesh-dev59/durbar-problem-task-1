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