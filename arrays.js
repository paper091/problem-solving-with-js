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
console.log("length of array 1: " + l);
console.log("length of array 2: " + l2);
console.log();



  ////////////////////////  
 // reading an array
////////////////////////

// 1. reading the first element
console.log("first element of array 1: " + arr[0]);
console.log("first element of array 2: " + arr2[0]);

// 2. reading the ith element
var i = 2
console.log("ith(2nd) element of array 2: " + arr[i]);
console.log("ith(2nd) element of array 2: " + arr2[i]);

// 3. reading the last element
console.log("last element of array 2: " + arr[l-1]);
console.log("last element of array 2: " + arr2[l2-1]);
console.log();



  ////////////////////////////
 // iterating over an array
////////////////////////////

// 1. using while loop
console.log("Iterating over elements of array 1: ");
var itr = 0;
while(itr<l){
    console.log(arr[itr]);
    itr++;
}

// 2. using for loop
console.log("Iterating over elements of array 2: ");
for(itr = 0; itr < l2; itr++){
    console.log(arr[itr]);
}
console.log();



  /////////////////////////  
 // adding into an array
/////////////////////////

// 1. adding at the last
arr.push("!");
console.log("array 1 after adding to end: " + arr);

// 2. adding at the front
arr2.unshift("Hi");
console.log("array 2 after adding to front: " + arr);
console.log();



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
var d2 = arr[2];
delete arr[2];
console.log("Deleted: " + d2);
console.log();


  ///////////////////////////////////////  
 // transforming array to single string
////////////////////////////////////////
console.log(arr);

// 1. using toString()
var message = arr.toString();
console.log("Array 1 as string(using toString()): " + message);

// 2. using join() -> taking argument for the separation value/character/string
var message2 = arr2.join(" ");
console.log("Array 2 as string(using join()): " + message);
console.log();