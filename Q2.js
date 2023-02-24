
 /*Question 2
Write a program to combine two arrays
firstInput = [ 1, 2, 3 ]
secondInput = [ 4, 5, 6 ]
Output: = [ 1, 2, 3, 4, 5, 6]*/


// this is the simple approach where we can  concat two two array using variables declaration 
 

const num1 = [1,2,3];
const num2 = [4,5,6];
console.log(num1.concat(num2))




// here i  used function with two parameter  a and b  when i call my function  with arguments its simply concate two arraysz
const myconcat=(a,b) =>
{
console.log(a.concat(b));
}
myconcat([1,2,3],[4,5,6])



 




