📝 JavaScript Code Summary: Basics and CRUD Bank System

This document summarizes a JavaScript program covering loops, functions, arrays, objects, and a simple CRUD (Create, Read, Update, Delete) bank system using localStorage. The code is organized with detailed comments and emoji icons for clarity, making it an excellent study reference for GitHub.

🚀 Overview

The code demonstrates:

Loops: for, while, do-while, and array iteration methods (forEach, find, filter).

Functions: Function declarations, expressions, arrow functions, and default parameters.

Arrays: Creation, manipulation (push, pop, splice, etc.), and array methods.

Objects: Object literals, methods, and arrays of objects.

CRUD Bank System: A simple system to manage user data (name, ID, balance) with localStorage.

🛠️ Code Structure

The program is divided into sections:

Loops: Examples of for, while, and do-while loops with continue and break.

Functions: Different function types and parameter handling.

Arrays: Array creation, manipulation, and methods (push, pop, splice, forEach, find, filter).

Objects: Object properties, methods, and arrays of objects.



CRUD Bank System: Functions to add, edit, delete, and display users, stored in localStorage.

-------------------------------------------------------------------------------------------------------------------

📘 JavaScript Session 15 – Notes
🔹 var / let / const

var → function scoped, hoisted, can be redeclared and reassigned.

let → block scoped, cannot be redeclared, can be reassigned.

const → block scoped, must be initialized, cannot be redeclared or reassigned.

🔹 Scope

var is accessible outside block { } (if inside a function).

let and const are block-scoped → accessible only inside the block.

🔹 DOM Manipulation

Use document.createElement(tagName) to dynamically create elements.

Append with .appendChild() to add nodes to the DOM.

Example: building a form + table dynamically, then inserting user data.

🔹 Events

Input Events: listen to changes with .addEventListener("change", ...).

Button Events: prevent default form submission using event.preventDefault().

Hover Effects: can be controlled by functions that change element.style.

Scroll Events:

Track scrollTop to detect how far an element has scrolled.

Show/Hide a "scroll to top" button when window.scrollY > 100.

🔹 General Takeaways

Always prefer let and const over var.

Keep in mind scope rules to avoid unexpected errors.

DOM can be dynamically generated instead of hardcoding HTML.

Events are essential to handle user interactions smoothly.

Styling can be done inline with JS or by toggling CSS classes.

