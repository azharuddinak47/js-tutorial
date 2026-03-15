
const user = { // storing multiple related data
    name: "Azhar", // property: value
    age: 30,
    email: "azhar@example.com",
    address: '123 Main St, Anytown, USA'
}

console.log(user); // print whole object
console.log(user.age); // access single property


// mix array with object it's called array of objects
// const users = ["azhar", "ali", "john"];
const users = [
    {
        name: "Azhar",
        age: 30,
    },
    {
        name: "Ali",
        age: 25,
    },
]

console.log(users[0].name); // access name of first user
console.log(users[1].age); // access age of second user