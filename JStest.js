/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line
// Code example
// for(var i=1; i<=5; i++) {
//  console.log(i);
// }

// var myvar;
// myvar = 5;
// console.log(myvar);

// for(var i=1; i<=5; i++){
//     console.log(i);
// }

// function fun(){
//     console.log("Hello World");
// }
// fun();

// function summation(a){
//     return a+3;
// }
// console.log(summation(1));

// var a;
// var b=a;
// console.log(b);          //undefined
// console.log(a+b);        // NaN
// console.log(a+"b");      //undefinedb

// let a = "James";
// // let a = "Bond";       // can't use same variable for declaration more than once.
// console.log(a);
// a=77;
// console.log(a);

// const a = 44; // can't change values, if we will use 'const'.
// console.log(a);
// a = 54;
// console.log(a); 

// let a = 10/8;
// console.log(a);

// console.log(5%2);   // % gives remainder.
// console.log(Math.floor(50/2));   // gives quotient.

//Even or Odd
// a=20
// if (a%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// let a = 5;
// a+=5;
// console.log(a);

// const str = "Alan said, \"Peter is learning Js\".";
// console.log(str);

// const doubleQuoteStr = "This is double quotes";
// const singleQuoteStr = 'This is single quote';
// console.log(doubleQuoteStr);
// console.log(singleQuoteStr);

// const conv = 'Finn exclaims to Jake, "Yo"';
// console.log(conv);

// const goodStr =  'Jake asks Finn, "Hey, let\'s go on an adventure?"';
// console.log(goodStr);
// const badStr = 'Finn responds, "Let's go!"';     //Will throw error because '\' is not used before "'s".
// console.log(badStr);

// console.log('My name is'+' Ranjan Kumar');
// let ourStr = "I come first. ";
// ourStr += "I come second.";
// console.log(ourStr);

// const ourName = "Metacrafters";
// const ourString = "Hello, our name is "+ourName+", how are you?";
// console.log(ourString);

// console.log("Ada Lovelace".length);
// const name = "Ranjan";
// console.log(name.length);

// let myStr = "Bob";
// // myStr[0] = "J";     // No effect on the code as Strings are immutable.
// myStr = "Job";
// console.log(myStr);

// function test (myCondition){
//     if(myCondition){
//     console.log( "It was true");
//     }
//     else{
// console.log("It was false");
// }
// }
// test(false);
// test(true);

// function equalityTest(myVal){
//     if(myVal === 10){
//         console.log("Equal");
//     }
//     else{
//         console.log("Not Equal");
//     }
// }
// equalityTest(10);

// switch (num) {                   // switch case pseudocode
//     case "a":
//         console.log("A");
//         break;

//     case "b":
//         console.log("B");
//         break;

//     default:
//         console.log("!!!!!");
//         break;
// }

// function findGreater(a,b){
//     console.log(a>b? "a is greater":"b is greater or eqaul");
// }
// findGreater(1,2);

// function findGreatest(a,b){
//     console.log(a===b?"a and b are equal":(a>b)?"a is greater":"b is greater");
// }

// findGreatest(3,7);

// const sandwich = ["Bread", "Jelly", "Peanut Butter"];
// console.log(sandwich);

// const teams = [["MSD","Sachin"],["Rohit","Virat"]];
// console.log(teams);
// console.log(teams[0][0]);
// const data  = teams[1][1];
// console.log(data);
// teams[0][1]="Jadeja";
// console.log(teams);

// const arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [[10,11,12],[13,14]]
// ];

// console.log(arr);     //  3d array

// const arr = [11,12,13];
// arr.push(3,11)           // unshift()
// arr.shift()             //works as pop() but removes 1st element.
// console.log(arr);

// const cat = {
//     "name":"Whiskers",
//     "tails":1,
//     "legs":4,
//     "enemies":["Water","Dogs"]
// }
// console.log(cat);
// console.log(typeof(cat));       //cat is an 'object'.

// const anotherObject = {
//     make:"Ford",
//     5:"Five",                    // non-string variables automatically gets typecasted as 'Strings'.
//     model:"Focus"
// };
// console.log(anotherObject);

// const obj={
//     prop1:"val1",
//     prop2:"val2",
// };
// console.log(obj["prop1"]);
// console.log(obj.prop2);

// obj.prop1="val3"
// console.log(obj);

// obj.prop3="val44"
// console.log(obj);

// delete obj.prop3;
// console.log(obj);

// function fn(p1,p2){
//     console.log(p1,p2);
// }
// fn("hello","world");

// function plus(num){
//     return num+3;
// }
// console.log(plus(5));

// const gl="Hii";
// function myTest(){
//     const loc="foo";
//     console.log(loc);
//     console.log(gl);
// }
// myTest();
// console.log(loc);       //throws error as 'loc' is a local variable and not a 'global' one.
// console.log(gl);

// function isEqual(a,b){
//     return a===b;
//     console.log(a);         // won't be executed because it is written after 'return'.
// }
// console.log(isEqual(5,4));

// const arr=[]
// let i=0;
// while(i<5){
//     arr.push(i);
//     i++;
// }
// console.log(arr);

// const arr=[];
// for(let i=0;i<10;i+=2){
//     arr.push(i);
// }
// console.log(arr);

// const arr = [];
// for(let i=10;i>0;i-=2){
//     arr.push(i);
// }
// console.log(arr);

// const arr=[10,9,8,7,6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const arr=[[1,2],[3,4],[5,6]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// const arr=[];
// let i=0;
// do{
//     arr.push(i);
//     i++;
// } while(i<5);
// console.log(arr);

// const a=parseInt("007");
// console.log(a);

// function tryIt(numberAsString){
//     if (parseInt(numberAsString)==123){
//         return console.log("Yay!");
//     }
//     console.log("Boo!");
// }
// tryIt("123");


/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT={
        "name":_name,
        "eyeColor":_eyeColor,
        "shirtType":_shirtType,
        "bling":_bling
    }
    NFTs.push(NFT);
    console.log("Minted : "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nID :\t\t"+(i+1));
        console.log("Name : \t\t"+NFTs[i].name);
        console.log("Eye Color :\t"+NFTs[i].eyeColor);
        console.log("Shirt Type : \t"+NFTs[i].shirtType);
        console.log("Bling : \t"+NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);
}

// call your functions below this line
mintNFT("Bob","Blue","Hoodie","Gold Chain");
mintNFT("Sue","Blue","Hoodie","Gold Chain");
mintNFT("Tim","Blue","Hoodie","Gold Chain");
mintNFT("John","Blue","Hoodie","Gold Chain");
listNFTs();
getTotalSupply();
