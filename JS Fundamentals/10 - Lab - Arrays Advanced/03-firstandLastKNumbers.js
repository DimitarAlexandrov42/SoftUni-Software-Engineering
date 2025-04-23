function firstAndLastKNumber(Numbers){

    let kNumber = Numbers.shift()
      let firstLine = Numbers.slice(0, kNumber)
      let secondLine = Numbers.slice(Numbers.length-kNumber)

      console.log(firstLine.join(" "));
      console.log(secondLine.join(" "));

}
firstAndLastKNumber([2, 7, 8, 9])