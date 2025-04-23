function specialNumbers(input) {

  let n = Number(input[0])
  let buff = ""

  for (let i = 1111; i <= 9999; i++) {
    let buff2 = ""
    let curNum = String(i)

    for (let y = 0; y < curNum.length; y++) {

      let num = Number(curNum[y])
      if (n % num === 0) {
        buff2 += num
      }
      if (buff2.length === curNum.length) {
        buff += buff2 + " "

      }
    }
  }
  console.log(buff)
}
specialNumbers(["3"])