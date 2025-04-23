function createFunction(myFunc) {
  return function (a, b, c, d) {
    return myFunc(a, b, c, d)
  }
}

let sum = createFunction((a, b, c, d) => a + b + c + d)

console.log(sum(3, 4, 5, 12));

let subtract = createFunction((a, b, c) => -a - b - c)

console.log(subtract(3, 4, 5));

let multiplication = createFunction((a, c, b) => a * b * c)

console.log(multiplication(3, 4, 5));
// --------------------------------------------------------------



function solve() {
  return (a, b) => a + b
}

let myFunc = solve()
console.log(myFunc(1, 3));

// ----------------------------------------------------------
function first() {
  return function second() {
    return function third() {
      return 100
    }
  }
}

let result = first()()()

console.log(result);


let second = first()
let third = second()
let result1 = third()
console.log(result , result1);

// ----------------------------------------------------------------------

function first() {

  return second()

  function second() {

    return third()

    function third() {
      return 100
    }
  }
}
let result = first()
console.log(result);

let cat = {
  name: 'Sharo',
  meow: meow
}

let dog = {
  name: 'Joro',
  laugh: meow

}

function meow() {
  console.log(this.name + `: Mew!`);
}

dog.laugh()



// ----------------------------------------------------------------

// 

let cat = {
  name: 'Papi',
  age: 7,

  grow(age) {
    this.age += age
  }
}

let anotherCat = {
  name: 'Fosi',
  age: 12,


}

console.log(cat.age);
console.log(anotherCat.age);

let growFunc = cat.grow.bind(cat)

growFunc.call(anotherCat,5)
console.log(anotherCat.age);


function something(){
  console.log(this.lastName);
}

let obj = {
  name: 'Sharo',
  lastName: "Garfildov"
}
something.call(obj)


function myFunc(){
  console.log('YEAH!');
}

let currFunc = myFunc

function anotherFunc(func){
  return func
}
anotherFunc(currFunc)

let lastFunc = anotherFunc(currFunc)

lastFunc()

let isOdd = (number) => number % 2 == 1

console.log(isOdd(3));

// =============================CLOSURE==============================================

function outer() {
    let counter = 10

    return function () {
    console.log(obj.name);
        return counter
    ;
    }


}
let inner = outer()

inner()
inner()
inner()
inner()

let secondInner = outer()
secondInner()
// ------------------------------------------------------------------------------

let partialSum = (x,y) => (z) => x+y+z

let somePartial = partialSum(1,2)

let result = somePartial



// =============================OR==============================
function partialSum1(x,y){
  return function(z){
    return (x+y+z)
  }
}

let partial1 = partialSum1(10,30)

let result1 = partial1

console.log(result1);

==================================================================

function logMessage(date, message, type) {
  console.log(`${date.toLocaleString('en-US')} - ${type.toUpperCase()} - ${message}`);
}

function logMessageDate(date) {
  return function (message, type) {
    logMessage(date, message, type)
  }
}

//short syntax\\ let logMessageDate = (data) =>(message,type) => logMessage(data,message,type)

let logMessageNow = logMessageDate(new Date())

function logMessageNowWithType(type) {
  return function (message) {
    logMessageNow(message, type)
  }
}

let logWarningNow = logMessageNowWithType('warning')

// ==================================================================
function sum(x, y, z) {
  return x + y + z
}


function curriedSum(x) {
  return function (y) {
    return function (z) {
      return sum(x, y, z)
    }
  }
}

// or

let curriedSum = (x) => (y) => (z) => sum(x,y,z)

// -----------------------------------------------------------

function curry(f) {
  return function currify() {
    const args = Array.prototype.slice.call(arguments);
    return args.length >= f.length ?
      f.apply(null, args) :
      currify.bind(null, ...args)
  }
}


let hardSum = (x, y, z, a, b, c) => x + y + z + a + b + c

let sum = curry(hardSum)

let result = sum(1, 2, 3)(4, 5)(6)

console.log(result);

// ---------------------------------------------

//   function myFunc(a, b, c) {
//     b = b ?? 100 Ако б е undifined върни 100 
//     console.log(a + b + c);

//   }
// myFunc(1,undefined, 6)

function demo(s){
  let myNumber = s

  if (myNumber = myNumber ?? 10) {
      console.log(myNumber);
  }
}
demo(undefined)

// function solution() {

//   let users = [{ name: "Tim", age: 25 },
//   { name: "Sam", age: 30 },
//   { name: "Bill", age: 20 }]


//   let getName = (user) => user.name

//   let usernames = users.map(getName)
//   console.log(usernames);
// }
// solution()






