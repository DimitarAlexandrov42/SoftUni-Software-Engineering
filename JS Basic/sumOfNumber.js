function sumOfNumber(input) {
   let number = input[0]
   let sum = 0
   for (let i = 0; i < number.length; i++) {
      let allNum = Number(number[i])
      sum += allNum
   }
   console.log(`The sum of the digits is:  ${sum}`)
}
sumOfNumber(["15239999"])