/*
                                               Question 5
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
*/

function  adjacentElementsProduct(inputArray){
  
  let x,y
  let p=0
  for(let i=0;i<=inputArray.length;i++){
    x=inputArray[i]
    y=inputArray[i+1]
    if(x*y>p){
      p=x*y;
    }
  }
return p
}
console.log(adjacentElementsProduct([2,1,4,5,3,1]))

