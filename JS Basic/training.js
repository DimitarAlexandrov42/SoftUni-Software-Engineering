function sumOfNumbers(input) {
   let num = input[0]
   let sum = 0
   let ch = 0
   for(let i = 0 ; i < num.length ; i++){
     ch = Number(num[i])
     sum += ch
   }

    console.log(sum)
}
sumOfNumbers(["123456789"])