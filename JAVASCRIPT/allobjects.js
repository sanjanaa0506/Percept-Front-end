//Objects:- String
             //math
             //array
             //Number
             //Date

//String 

var str = "Infomation Technology";
console.log("length of string is:" + str.length);
console.log("Substring is:" + str.substr(12,10));


//MAth

let pi=Math.PI;           //Math.min() Math.max() Math.ceil() Math.cos() Math.exp() Math.sqrt() Math.floor()
console.log(pi + "<br>");

let sqrt =Math.sqrt(9);
console.log(sqrt);

var a=Math.E   
console.log(a + "<br>");

var b=Math.abs(10) 
console.log(b + "<br>");


//array


var fruits= new Array("apple", "orange", "mango");
console.log(fruits[0]);
console.log(fruits[1]);      //unshift()
console.log(fruits[2]);
fruits.push("banana");
console.log(fruits);

fruits.pop("apple");
console.log(fruits);

var num=[10,2,10,6].shift();
console.log("REMOVED ELEMENT IS " +num);


//Number

Number('123');
123
Number('123') === 123
Number("SAYYES");

let x = new Number(290.78);
console.log(x + "<br>");
console.log(typeof x + "<br/>");

let y= x.valueOf()
console.log(typeof num);




//Date

let newdate =new Date();
console.log(newdate);

let newi = Date.now();  //number of miliseconds since 1 january 1970
console.log(newi);

//getFullYear() getMonth() getDate()
