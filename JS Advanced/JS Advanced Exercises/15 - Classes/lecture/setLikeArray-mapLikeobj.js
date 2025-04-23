// class Circle {
//     constructor(r) {
//         this.r = r
//     }

//     get r() {
//         return this._r
//     }

//     set r(value) {
//         if (typeof value != "number") {
//             throw new TypeError("Expected number")
//         }
//         this.r = value
//     }
// }


// let cirr = new Circle(4)
// console.log(cirr);

let myMap = new Map()
myMap.set(1, "Pesho")
myMap.set(0, "Gosho")
myMap.set(2, "Tosho")
let obj = {}
obj["purvi"] = "Pesho"
obj["vtori"] = "Gosho"
obj["treti"] = "Tosho"

console.log(myMap);

for (const iterator of myMap) {
    console.log(iterator[1]);



}



let mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add({})

console.log(mySet);
// НЕ МОЖЕ ДА ИМА ПОВТОРИМИ СТОЙНОСТИ ВЪВ SET-A 


let sortedSet = Array.from(mySet).sort((a, b) => b - a)
mySet.delete(2)
console.log(sortedSet);
console.log(mySet);

