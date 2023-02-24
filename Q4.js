/*Question 4
Create a nested Create a nested for loops produce the loops produce the
following output.
....1
...22
..333
.4444
55555*/


let rows=5

for(i=1;i<=rows;i++){
  var dot="";
  for(let j=1;j<=5-i;j++){
    dot+=".";
  }
 
  for(k=1;k<=i;k++){
    dot+=i;
  }
  
  console.log(dot)
}