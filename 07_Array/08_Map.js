/*

!What is Map?

In JavaScript, map is an array method that creates a new array by applying a function to each element of an existing array. It's one of the most commonly used array methods for transforming data.

*/

const numbers = [1, 2, 3, 4, 5];

let a = numbers.map(function (val) {
    return val + 1;
});

console.log(a);
// [2, 3, 4, 5, 6]

/*

! What map() actually does

* runs a function on each element
* creates a NEW array
* fills that new array with what you RETURN

👉 Important rule:

If you don’t return anything → undefined is returned automatically.

*/
