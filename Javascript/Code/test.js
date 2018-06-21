// string template
// const name = 'Rohit';
// console.log(`ich heise ${name.toUpperCase()}`);


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
[...array].sort(x => x.property);
