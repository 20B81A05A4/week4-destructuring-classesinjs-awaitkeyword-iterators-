//DESTRUCTURING-OBJECTS
let users={
    name:'shruthi',
    age:20,
    loc:'hyd'
}
let{name,age,loc}=users;
console.log(name,age,loc)
//DESTRUCTURING-ARRAY
let user=['SHRUTHI',20,'hyd']
console.log(name,age)

// //classes in js
class h{
    constructor(){
        console.log("inside ConstrUctoR")
    }
    getName(){
        return this.name
    }
}
 let o2= new h()
console.log(o2)
//classes in js
class hie{
    constructor(){
        console.log("inside ConstrUctoR")
    }
    getName(){
        return this.name
    }
}
let o1= new hie()
console.log(o1.getName())

//CLASSES IN JS
class hi{
    constructor(){
        console.log("inside ConstrUctoR")
    }
    getName(){
        return this.name='shruthi'
    }
}
let o= new hi()
console.log(o.getName())

//AWAIT KEYWORD 
async function test(){
    console.log("test function");
    console.log("test function");
    await console.log("test function");
    console.log("test function");
    console.log("probably last");
    console.log("test function");
    return "shruthi"
}
test()
console.log("after testing")

//ITERATORS 
// let arr=[1,2,3,4,5,6,7,8]
// for(let i=0;i<arr.length;i++)
// console.log(arr[i])
// console.log(arr);

//ITERATORS
let arr=[1,2,3,4,5,6,7,8]
for(let i=0;i<arr.length;i++)
console.log(arr[i])
console.log(arr);
let iter=arr[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

//SYMBOLS
// let s1=Symbol("shruthi");
// let s2=Symbol("shruthi");
// console.log(s1==s2)


//SYMBOLS
let user1={
    name:"shruthi",
    age:20,
    add:"hyd"
}
user1.desig="student"
for(let i in user1)
console.log(i)