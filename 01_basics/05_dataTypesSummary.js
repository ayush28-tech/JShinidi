//primitive Datatypes
//they are call by value

//7types: String , number, Boolean , null, undefined, symbol, BigInt

const score =100
const scoreValue= 100.3
const loggedIn= false
const outsideTemp=null
let userEmail;


 const id = Symbol('123')
 const anotherId =Symbol('123')// they both are not same
 const bigNumber = 345356356n

// Non- primitive datatypes
//they are call by reference

//Array, Objects, Functions

const heroes = ["shaktiman", "Nagraj", "doga"];
let myObj = {
    name:"Ayush",
    age:21,
}
const myFunction = function(){
    console.log("hello world");

}
console.log( typeof [heroes,myObj,myFunction]);




// ++++++++++++++ Stack(Primitive), Heap (Non-Primitive)  +++++++++++++++++

// stack always gives copy but heap always gives reference 
//stack
let myname="Ayush"
let anothername=myname
anothername="Ashu"

console.log(myname)
console.log(anothername)


//heap
let userOne ={
    name:"Ayush",
    age:21
}
let userTwo= userOne
userTwo.name="Ashu"
console.log(userOne);
console.log(userTwo)