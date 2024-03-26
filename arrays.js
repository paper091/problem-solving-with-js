  ////////////////////////  
 // creating an array
////////////////////////

// 1. array literal method
var arr = ["Hello", "everyone,", "paper", "this side"];

// 2. using 'new' keyword
var arr2 = new Array("everyone", "paper", "this side", "!");



  /////////////////////////////// 
 // checking the size an array
///////////////////////////////
var l = (arr.length-1);
var l2 = (arr2.length-1);
console.log(l);
console.log(l2);



  ////////////////////////  
 // reading an array
////////////////////////

// 1. reading the first element
console.log(arr[0]);
console.log(arr2[0]);

// 2. reading the ith element
var i = 2
console.log(arr[i]);
console.log(arr2[i]);

// 3. reading the last element
console.log(arr[l-1]);
console.log(arr2[l2-1]);



  ////////////////////////////
 // iterating over an array
////////////////////////////

// 1. using while loop
var itr = 0;
while(itr<l){
    console.log(arr[itr]);
    itr++;
}

// 2. using for loop
for(itr = 0; itr < l2; itr++){
    console.log(arr[itr]);
}



  /////////////////////////  
 // adding into an array
/////////////////////////

// 1. adding at the last
arr.push("!");

// 2. adding at the front
arr2.unshift("Hi");



  ///////////////////////////  
 // deleting from an array
///////////////////////////

// 1. using pop()
var deleted = arr.pop();
console.log("Deleted: " + deleted);

// 2. using shift()
var del = arr2.shift();
console.log("Deleted: " + del);

// 3. delete operator
delete arr[2];


  ///////////////////////////////////////  
 // transforming array to single string
////////////////////////////////////////
console.log(arr);

// 1. using toString()
var message = arr.toString();
console.log(message);

// 2. using join() -> taking argument for the separation value/character/string
var message2 = arr2.join(" ");
console.log(message2);