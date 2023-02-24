
/*
 Question 6
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
Example n= 1, output = 1; For n = 2, the soutput should be output= 5; For n = 3, the output should be output= 13. For n = 4, the output should be output = 25.

*/
var n=2;
var aop=(n*n +(n-1)*(n-1))
console.log(aop);


function shapeArea(n) {
  return n * n + (n - 1) * (n - 1);
}
console.log(shapeArea(1));
console.log(shapeArea(2))
console.log(shapeArea(3))
console.log(shapeArea(4))
