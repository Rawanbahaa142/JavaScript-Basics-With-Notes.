/**************************************************
 * 📚 JAVASCRIPT NOTES + CRUD BANK PROJECT
 * Author: Rawan Bahaa
 * Purpose: Practice JS basics and CRUD operations
 **************************************************/

/* =============================
   🔁 1. Loops Examples
   ============================= */

// ➡️ for loop with break & continue
for (var i = 1; i <= 10; i++) {
    if (i == 8) {
        console.log('num = 8'); // Stop loop if i = 8
        break;
    } else if (i == 4) {
        continue; // Skip 4
    } else {
        console.log(i);
    }
}

// 🔄 while loop example
var w = 1;
while (w <= 5) {
    console.log("While loop:", w);
    w++;
}

// 🔄 do-while loop example
var d = 1;
do {
    console.log("Do-While loop:", d);
    d++;
} while (d <= 3);


/* =============================
   🛠 2. Functions Examples
   ============================= */

// ➕ Function with parameters & return
function sum(num1 = 2, num2 = 50) {
    return num1 + num2;
}
console.log("Sum:", sum(10, 20));

// ⚡ Arrow function
const getResult = (num1, num2) => num1 > num2;
console.log("Is 10 > 5?", getResult(10, 5));


/* =============================
   📦 3. Arrays Basics
   ============================= */
let userInfo = ["Tamer", "Fayez", 40, "Engineer", true];

// ➕ Add to end
userInfo.push("Nasr City");
// ➖ Remove from end
userInfo.pop();

// ⬆ Add to start
userInfo.unshift("Zein");
// ⬇ Remove from start
userInfo.shift();

// 🔍 Search
console.log("Includes 'Tamer'?", userInfo.includes("Tamer"));

// 🔁 Loop through array
userInfo.forEach((item, index) => {
    console.log(index, item);
});


/* =============================
   🛠 4. Array Methods
   ============================= */
let courses = ["HTML", "CSS", "Bootstrap", "Node", "Angular"];

// 📝 Add using splice
courses.splice(2, 0, "JS", "TS");
// 🔄 Update using splice
courses.splice(4, 2, "NodeJS", "Express");
// ❌ Remove using splice
courses.splice(5, 1);

// 🔃 Reverse array
courses.reverse();

// ✂ Slice (does not change original array)
let newArr = courses.slice(1, 3);

// 🔗 Concat arrays
let allCourses = courses.concat(["React", "Vue"]);

// ✨ Map
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);

// 🎯 Filter
let greaterThan2 = numbers.filter(num => num > 2);

// 🔍 Find
let found = numbers.find(num => num > 1);

// 📌 Find index
let foundIndex = numbers.findIndex(num => num === 2);


/* =============================
   👤 5. Objects Basics
   ============================= */
let user = {
    firstName: "Tamer",
    lastName: "Fayez",
    address: "Nasr City",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    phoneNumbers: {
        home: "01222222222",
        office: "03322222222"
    }
};
console.log(user.fullName());


/* =============================
   🏦 6. CRUD Bank Project
   ============================= */

// 💾 Retrieve from localStorage or initialize empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

// 1️⃣ Get number of users to add
function numberOfUsers() {
    let num = prompt("Enter number of users:");
    return parseInt(num); // Convert to integer
}

// 2️⃣ Add users
function addUsers(count) {
    for (let i = 0; i < count; i++) {
        let name = prompt(`Enter Name of User ${i + 1}`);
        let id = prompt(`Enter ID of User ${i + 1}`);
        let balance = prompt(`Enter Balance of User ${i + 1}`);
        users.push({ name, id, balance });
    }
    saveUsers();
}

// 3️⃣ Edit user balance by ID
function editUsersBalanceById() {
    let updateId = prompt("Enter ID to update balance:");
    let newBalance = prompt("Enter new balance:");
    let user = users.find(u => u.id === updateId);
    if (user) {
        user.balance = newBalance;
        saveUsers();
        console.log("✅ Balance updated successfully.");
    } else {
        console.log("❌ User not found.");
    }
}

// 4️⃣ Delete user by ID
function deleteUser() {
    let deleteId = prompt("Enter ID to delete:");
    let beforeLength = users.length;
    users = users.filter(u => u.id !== deleteId);
    if (users.length < beforeLength) {
        saveUsers();
        console.log("🗑 User deleted successfully.");
    } else {
        console.log("❌ User not found.");
    }
}

// 5️⃣ Show all users
function showAllUsers() {
    console.table(users);
}

// 💾 Save to localStorage
function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

// ====== ▶ Run Example ======
let num = numberOfUsers();
if (num) addUsers(num);
editUsersBalanceById();
deleteUser();
showAllUsers();