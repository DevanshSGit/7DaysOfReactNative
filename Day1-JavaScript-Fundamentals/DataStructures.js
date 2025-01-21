// Objects

// Object Literals
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

// Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2021;

console.log(car);

// Using Object.create()
// Creates an object with a specified prototype
const animal = {
  type: "Mammal",
};

const dog = Object.create(animal);
dog.name = "Buddy";

console.log(dog.type);
console.log(dog.name);

// Accessing Properties

// Dot Notation
console.log(person.name); // Alice

// Bracket Notation
// Useful when the key is dynamic or not a valid JavaScript identifier

const key = "age";
console.log(person[key]);

// Modifying Objects

// Adding/Updating Properties

person.hobby = "Reading";
person.age = 26;

console.log(person.hobby);
console.log(person.age);

// Deleting properties
delete person.isStudent;
console.log(person.isStudent); // Undefined

// Checking properties

// Using in Operator
console.log("name" in person); // true
console.log("salary" in person); // false

// Enumerating Properties

// for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys()
// Returns an array of keys

console.log(Object.keys(person)); // [ 'name', 'age', 'greet', 'hobby' ]

// Object.values()
// Returns an array of values

console.log(Object.values(person)); // [ 'Alice', 26, [Function: greet], 'Reading' ]

// Object.entries()
// Returns an array of [key, value] pairs

console.log(Object.entries(person));
// [
//     [ 'name', 'Alice' ],
//     [ 'age', 26 ],
//     [ 'greet', [Function: greet] ],
//     [ 'hobby', 'Reading' ]
//  ]

// Converting Objects to JSON

const personObj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(personObj);
console.log(jsonString);

// Parsing JSON to Objects

const json = '{"name": "Alice", "age": 25}';
const parsedObj = JSON.parse(json);
console.log(parsedObj);

/* * * * * * * * */

// Declaring an array

// Using array literal
let fruits = ["apple", "banana", "cherry", "date"];

// Using the array constructor
let numbers = new Array(10, 20, 30);

// Empty array
let emptyArray = [];

// Mixed data types
let mixedArray = [42, "hello", true, null];

// Properties and methods

// Length

let nums = [10, 20, 30];
console.log(nums.length);

// Adding Elements

// push(): Adds an element at the end of the array
// unshift(): Adds an element to the beginning of the array

let arr = [1, 2, 3, 4];
arr.push(5); // [1, 2, 3, 4, 5]
arr.unshift(0); // [0, 1, 2, 3, 4, 5]

console.log(arr.length);

// Removing elements

// pop(): Removes the last element
// shift(): Removes the first element

arr.pop(); // [0, 1, 2, 3, 4]
arr.shift(); // [1, 2, 3, 4]

// Iterating over arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits);
}

// for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach(): Executes a function for each array element
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// Transforming arrays

// map(): Creates a new array by applying a function to each element
let numberArray = [1, 2, 3];
let squaredNumbers = numberArray.map((num) => num * num); // [1, 4, 9]

// filter(): Creates a new array with elements that pass a condition.
let evenNumbers = numberArray.filter((num) => num % 2 === 0); // [2]

// Finding elements

// indexOf(): Finds the index of the first occurrence of a value
let animals = ["dog", "cat", "bird"];
console.log(animals.indexOf("cat")); // 1

// includes(): Checks if an array contains a value
console.log(animals.includes("cat")); // true

// find(): Returns the first element that matches a condition
let found = numberArray.find((num) => num > 2); // 3

// findIndex(): Returns the index of the first matching element
let index = numberArray.findIndex((num) => num > 2); // 2

// Sorting and Reversing

// sort(): Sorts elements (alphabetically by default).

let letters = ["b", "a", "c"];
letters.sort(); // ['a', 'b', 'c']

// sort() with comparator function
let numbersToSort = [10, 2, 33, 4, 15];

arr.sort((a, b) => {
  // Return a negative value if 'a' should come before 'b'
  // Return a positive value if 'a' should come after 'b'
  // Return 0 if 'a' and 'b' are equal
});

// Ascending order (smallest to largest)
numbersToSort.sort((a, b) => a - b);
console.log(numbersToSort);

// Descending order (largest to smallest)
numbersToSort.sort((a, b) => b - a);
console.log(numbersToSort); // [33, 15, 10, 4, 2]

// Sorting strings alpahbetically
// For strings, sort() works without a comparator function because it sorts alphabetically by default
fruits.sort();
console.log("fruits", fruits); // ['apple', 'banana', 'cherry', 'date']

// Sorting an array of objects by a property

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];

// Sorting by price (ascending)
products.sort((a, b) => a.price - b.price);
console.log(products);

// Sorting by price (descending)
products.sort((a, b) => b.price - a.price);
console.log(products);

// Sorting by a string property
products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);

// Reverse alphabetical order
fruits.sort((a, b) => b.localeCompare(a));
console.log("fruits", fruits); // ['date', 'cherry', 'banana', 'apple']

// reverse(): Reverses the array order.
letters.reverse(); // ['c', 'b', 'a']

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Find an user by id
let user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: 'Bob }

// Add a new user
users.push({ id: 4, name: "Diana" });
console.log(users);

// Remove a user
let userIndex = users.findIndex((user) => user.id === 1);
if (userIndex !== -1) users.splice(userIndex, 1);
console.log(users);
