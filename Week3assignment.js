//	1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//       •	Do not use numbers to reference the last element, find it programmatically, 
//       •	Let agesages[7] – ages[0] is not allowed!
console.log(ages[ages.length-1] - ages[0]);
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. 
//      (works for arrays of different lengths).
ages.push(50);
console.log(ages[ages.length-1] - ages[0]);

//1c.	Use a loop to iterate through the array and calculate the average age. 
var i, sum = 0;
for (i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
};
console.log(sum / ages.length);
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’h, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
sum = 0;
for (i = 0; i < names.length; i++) {
    sum = sum + names[i].length;
}
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
var conc = names[0];
for (i = 1; i < names.length; i++) {
    conc = conc.concat('', names[i]);
} console.loh(conc);
//3.	How do you access the last element of any array?
 //        myarray[myarray.length -1]
//4.	How do you access the first element of any array?
//         myarray[0]
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously 
//      created names array and add the length of each name to the nameLengths array.
//      For example:
//      let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
//      let nameLengths = [5, 3, 4]; 			//create this new array

let nameLengths = [];
for (i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
sum = 0;
for (i = 0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
//7.	Write a function that takes two parameters, word and n, as arguments and returns the 
//      word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would 
//      expect the function to return ‘HelloHelloHello’).
function repeat(word, n){
    let conc = '';
    for (i=0; i < n; i++) {
        conc = conc + word;
    }
    return(conc);
}
console.log(repeat('Hello', 3))
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full 
//      name.  The full name should be the first and the last name separated by a space.
function fullname(firstName, lastName){
    return(firstName + ' ' + lastName);
} console.log(fullname('Victor', 'Vargas'));
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function grandTotal (array){
    sum = 0;
    for (i =0; i < array.length; i++){
        sum = sum + array[i];
    }
    if (sum > 100){
        return true;
    }
    else {
        return false;
    }
}
console.log(grandTotal(ages))
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averagenum (array){
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return(sum / array.length);

}
console.log(averagenum(ages))
//11.	Write a function that takes two arrays of numbers and returns true if the average of the 
//      elements in the first array is greater than the average of the elements in the second array.
function arrayavg (array1, array2){
    sum = 0;
    for (i = 0; i < array1.length; i++) {
        sum = sum + array1[i];
}
let average1 = (sum / array1.length);
sum = 0;
for (i = 0; i < array2.length; i++) {
    sum = sum + array2[i];
}
let average2 = (sum / array2.length);
if (average1 > average2){
    return true;

} else {
    return false
}
console.log(arrayavg(nameLengths,ages))

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
//      moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if ((isHotOutside) && (moneyInPocket > 10.50)){
        return true;
    } else{
        return false;
    }

}
console.log(willBuyDrink(true, 15));
//13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.{   
}

function concert (jams, ticketcost){
    if ((jams = 'Korn' || 'SOAD' || 'Cake') &&
    (ticketcost < 50)) {
        return "Rock out!";
    }
    else {
        return "Stay home :("
    }
}
console.log(concert('SOAD', 49.99));