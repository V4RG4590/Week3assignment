//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Arrays & Functions Lab
// JavaScript Week 03 Lab  
//

let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
console.log(array1[array1.length-1]);
// add 16 and 3 to array1
array1.push(16, 3);
// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1[2])

// create a variable called myTodoList that holds an empty array
let myTodoList = []
// add three todo items to the array using a built-in array method
myTodoList.push('eat','drink','shower');
// remove the second item in the array
array1.splice(1,1);
// create another array, yourTodoList, and add two todo items
let yourTodoList = ['workout','homework'];
// create another array, ourTodoList
let ourTodoList = []
// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = [...myTodoList, ...yourTodoList, "walk the dog"];
console.log(ourTodoList)

// sort the following array from Z-A
ourTodoList.sort();
// create a function called reversfe that takes in parameter


// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse(x) {
    if(typeof(x) === "boolean"){
        return !x;
    } else if(typeof(x) === "string" || typeof(x) === "number"){
        let splitX = x.split("");
    }
    let reverseX = splitX.reverse();

    let rejoinX = reverseX.join("");

    return rejoinX;{
    }
    




// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
}