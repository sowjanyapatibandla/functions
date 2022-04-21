//Q1.
function fun(){
    console.log("This is fun body");
}
fun();

//Q2.
function add(a,b){
  console.log("Sum of "+a+","+b+" is "+ (a+b));
}
add(3,4);

//Q3.
let arr=[5,6,7,9];
let sum=0;
arr.forEach((val)=>{
    sum+=val;
})
console.log("sum of array elements is "+sum);

//Q4.
 undefined

//Q.5
 21
 undefined

//Q6.
// ReferenceError: Cannot access 'a' before initialization

//Q.7
function factorial(n){
    let fact = 1;
    if (n == 0 || n == 1){
      return fact;
    }else{
      for(var i = n; i >= 1; i--){
        fact = fact * i;
      }
      return fact;
    }  
  }
console.log(factorial(4));