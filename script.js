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

function first(a,b){
     
   return c=a+b;
}
function second(a,b){
     
   return c=a-b;
}
function mul(a,b){
     
   return c=a*b;
}

function higherOF(subkuch){
return subkuch(30,20);

}

console.log(higherOF(first));
console.log(higherOF(second));
console.log(higherOF(mul));




















