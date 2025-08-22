// {
//   var a=1;
//     b=2;
//   const c=3;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Q2

// var k=2;
// function f(){
//   console.log(k);      //refrence error yyou are using k befor its initalization
//   let k=4;
// //   console.log(k);      
// }
// f()


// Q3

// const v=42;
// function test(){
//   console.log(v);                    // 42
// } 
// test();


// Q4

// function check(){
//   let p=99;

// }
                    
// console.log(p);   // refrence error because you are trying to use let outside the block



//Q5



// function one(){
//   console.log(y);   // undefined
//     var y=5;
//  }
// one()

// Q6
// function one(){
//   console.log(y);   //  refrence error you are using y befor its initilization   
//     let y=5;
//  }
// one();

// Q7

// var c=90;
// {
//   let c=60;
//   console.log(c);  // 60
// }
// console.log(c);  // 90

// Q8


// let b=20;
// {
//   let b=30;
//   console.log(b);
// }
// console.log(b);

// Q9

// function foo(){
//   var x=100;
// }
// console.log(x);   // refrence error x is not defined


// Q10
// var a=5;
// function run(){
//   var a=10;
//   console.log(a); //10
// }
// run();
// console.log(a);  //  5



// Q11

// let x=10;
// function test(){
//   console.log(x);  // 10
// }
// test();


// 12
// Q20
// console.log(typeof demo);   // function
// function demo(){
//     let a=10;
// }


// Q19

// test();
// var test = () =>{
//   console.log("test");
// };

// Q18
// console.log(sum(2,3));
// function sum(a,b){
//   return a+b;
// }

// // Q17
// console.log(x);
// var x;
//  x=50;

// // Q16
// console.log(myFunc);
// function myFunc(){      // body print hogi
//   return "JS";
// }


// // Q15
// bar();
// function bar(){
//   console.log("bar");    //bar
// }

// // Q14
// foo();
// var foo = function(){
//   console.log("foo");     // foo is not a function
// };

// // Q13
// console.log(b);    // refrene errror u are using b before its inilization 
// let b = 20;



// // Q12
// console.log(a);    // undefined
// var a = 10;


// // Q11
// sayHello();
// function sayHello(){
//   console.log("Hello");     // hello
// }



// // Q1
// function add(a,b){
//   return a+b;                         // 5
// }
// console.log(add(2,3));

// // Q2
// function say(){
//   console.log("Hello");    // hello and undefined
// }
// let x = say();
// console.log(x);


// // Q3 
// function test(){                    // undefined
//   return;
// }
// console.log(test());


// // Q4
// function calc(a,b){
//   return a*b, a+b;                         // 5                   last wali value return ki 
// }
// console.log(calc(2,3));



// let x =(a) => {
//     console.log(a)
// }


// console.log(x(4));



// example of higher order function 

// function first(){
     
//      let a=10;
//      var b=20;

//    return c=a+b;
// }
// function higherOF(first){

    
// return a+b;
// }

// console.log(higherOF(first));


// yaha prr apn ne arguments pass kiye he

// function first(a,b){
     
//    return c=a+b;
// }
// function second(a,b){
     
//    return c=a-b;
// }
// function mul(a,b){
     
//    return c=a*b;
// }

// function higherOF(subkuch){
// return subkuch(30,20);

// }



// console.log(higherOF(first));
// console.log(higherOF(second));
// console.log(higherOF(mul));



//  number is even or not 



// alert("RAM RAM")  




function printEven(num){
   for(let i=1;i<=num;i++){
      if(num%2==0){
         console.log("number is Even");
      }
      else{
         console.log("number is not  even");
      }
   }
}

printEven(11);




function printTable(numm){
   for(let i=1;i<=10;i++){
      console.log(`${numm}` + "*" + `${i}` + "=" +  `${numm*i}`);
   }
}


printTable(5)



// check the numebr is prime or nottt 


 let number=  10;
 

 isPrime=true;

if(number<=1){
   isprime=false;
}
else{
   for(let i=2;i<number;i++){
      if(number%i==0){
         isPrime=false;
         break;
      }
   }
}

if(isPrime){
  console.log( `${number} is prime number `);
  }
else{
   console.log(` ${number}  number is not prime`);
}


// finonaccii seriessss


function fibonacci(n) {
  let a = 0, b = 1;

  console.log(a); // pehla number
  console.log(b); // dusra number

  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacci(10); // pehle 10 numbers print karega



// factorial numberr 


function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result =result * i;
  }

  return result;
}

console.log(factorial(5)); // Output: 120


// reverse a number 

let num = 12345;
let reversed = 0;

while (num > 0) {
  let lastDigit = num % 10;        // last digit nikal lete he apn yaga se
  reversed = reversed * 10 + lastDigit; // digit ko reverse me add kiya he 
  num =  Math.floor( num / 10);      // last digit hata di
}

console.log(reversed); 





function shyamu(){
   let ramu={
       age:21,
       class:12,
       address: "dont have  " ,
        "E-id":102,
        E_id:102,
        21045: "nishant",
        funch:function(a,b){
       
      //  return a+b;
      }

   }

   return ramu;
}

   // console.log(shyamu());           
//   console.log(shyamu().funch(2,3));

console.log(shyamu().age);
console.log(shyamu()["21045"]);
 
  console.log(shyamu()["E-id"]);
  console.log(shyamu().E_id);

  

  










