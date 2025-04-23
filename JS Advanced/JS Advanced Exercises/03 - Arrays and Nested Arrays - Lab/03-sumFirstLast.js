function sumFirstLast(arr){

let firstNum = arr.shift()
let secondNum = arr.pop()

console.log(Number(firstNum)+Number(secondNum));

}
sumFirstLast(['20', '30', '40'])