/*Question 1
 Write a program to reverse an array or string using loop
 input: [ 1, 2, 3 ]
 output: [ 3, 2, 1 ]*/

 const num =[1,2,3,4,5,6,7,8];
 let rev=[]  ;
 for (let i=num.length-1;i>=0;i--){
   rev.push(num[i])
 }
 console.log(rev);



 const reverse=(a)=>{
  let revs=[]
  for(let i=a.length-1;i>=0;i--){
    revs.push(a[i])
  }
  console.log(revs)
 }
reverse([1,2,3]);