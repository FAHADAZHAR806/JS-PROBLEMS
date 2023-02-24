/*Question 3
Given an array, rotate the array to the right by k steps, where k is non-negative.
Input: [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]*/

let numb=[1,2,3,4,5,6,7];
let k=3;
let end=[];
for(i=0;i<k;i++){
  end=numb.pop()
  numb.unshift(end)
}
console.log(numb)




const rotate=(number,k)=>{
let end=[]
for(i=0;i<k;i++){
  end=number.pop()
  number.unshift(end);
  
}
console.log(number)
}
rotate([1,2,3,4,5,6],5)
 