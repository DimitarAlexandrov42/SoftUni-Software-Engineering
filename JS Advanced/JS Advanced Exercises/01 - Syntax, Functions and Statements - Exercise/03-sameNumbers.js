function sameNumber(num) {

  let numAsString = String(num)
  let firstNum = numAsString[0]
  let counter = 0
  let totalSum = 0

  for (const digit of numAsString) {
    totalSum +=Number(digit)
    if (digit === firstNum) {

    } else {

      counter++
    }
  }
  if (counter > 0) {
    console.log('false');
  } else {
    console.log('true');
  }
  console.log(totalSum);


}
sameNumber(24222222)