// string template
// const name = 'Rohit';
// console.log(`ich heise ${name.toUpperCase()}`);
//const name = "Rohit";
//console.log(`${name}`);

// sparse or missing array values
//https://stackoverflow.com/questions/34955787/is-a-javascript-array-order-guaranteed
// var fruits = ["Apple", "Banana"];
// fruits[100] = "Strawberry"; // Creating empty
// console.log(fruits.length);
// fruits.length = 0; //emptying array
// fruits.length = 10;
// console.log(fruits[0]);//return undefined

//Object is like an array
// const game1 = {
//     player: 'Jim Jonas',
//     hits: 2,
//     runs: 1,
//     errors: 0,
// };
// var keys = Object.keys(game1) // get the properties
// for(let index =0; index<keys.length; index++)
// {
//     console.log(`${keys[index]} = ${game1[keys[index]]}`);
// }


// const game1 = {
//     player: 'Jim Jonas',
//     hits: 2,
//     runs: 1,
//     errors: 0,
// };
// var entries = Object.entries(game1); //Entries as pair
// console.log(entries[0][0]);
// console.log(entries[0][1]);

//
// var names = ["a",  "b", "c"];//Check if array has an item by using includes, don't use indexOf as 0 can be falsy
// console.log(names.includes("a"));
// console.log(names.includes("z"));


// Use spread operator to pull out items and then put them back in another structure
// function removeItem(items, removable) {
//     const index = items.indexOf(removable);
//     return [...items.slice(0, index), ...items.slice(index + 1)];
// }


// //pass array as parameter
// const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
// //instead of doing
// function formatBook(title, author, price) {
//     return `${title} by ${author} $${price}`;
// }
// //call function like
// var x = formatBook(...book);
// console.log(x);


// Use spread to add to the beginning or end
// return [item, ...someArray];
// return [...someArray, item];


// perform operation on array without mutating, use spread to make copy
//[...array].sort(x => x.property);

//objects as key value store
// As a rule, objects are great when you want to share unchanging structured
// key-value data, but are not appropriate for dynamic information that is
// updated frequently or unknown until runtime, as you will see in later tips.

//Example: below is a static info, so good to use object
// const colors = {
//     red: '#d10202',
//     green: '#19d836',
//     blue: '#0e33d8'
// }

//Object.assign(obj1, obj2, obj3, obj4 etc) - updates series of object from left to right
// preference is given to the outer most object
// const obj1 = { name : "Rohit"};
// const obj2 = {name : "7Rohini"};
// const obj3 = {name : "Rohan"};
// Object.assign(obj1, obj2, obj3);
// console.log(obj1);
// console.log(obj2);

//Problem with Object.assign
// is that if we mutate twice, it is possible to have mixed results
// AKA It is possible that property in someObj1 is not there in someObj2, so we end up having mixed bag properties
// Object.assign(defaults, someObj1);
// Object.assign(defaults, someObj2)
//Secondly in  above case the first object mutates, so the correct way of using Object.assing is to use like so
//Object.assign({}, obj1, obj2, obj3); //that way only the empty object gets mutated
//Third - Object.assign does not support deep copying, it copies reference in case of an object

//A better way to Object.assign is to use Object spread operator
// const obj = {
//     name: "Rohit",
//     height: 175
// };
// console.log({...obj}); // make sure object spread is enclosed between curly braces
// //override height as 180 keeping other same
// console.log({...obj, height: 180});


//Map aka Dictionary, can take different type of keys
//use set to add
// //use get to get
// let myMap = new Map();
// myMap.set(1, 1);
// myMap.set("Rohit", "Rohit");
// console.log(myMap.get(1));
// console.log(myMap.get("Rohit"));
// //use has to find if a key exists in map
// console.log(myMap.has(1));
// console.log(myMap.has(5));