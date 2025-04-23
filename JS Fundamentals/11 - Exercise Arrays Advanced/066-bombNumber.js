function bombNumbers(arr, spec) {

    let bomb = spec[0]
    let bombPower = spec[1]
    let totalSum = 0
    
   while(arr.includes(bomb)){

    let index = arr.indexOf(bomb)
    let elToRemove = 2 * bombPower + 1
    let startingPoint = index - bombPower

    if(startingPoint < 0){
        elToRemove += startingPoint
        startingPoint = 0
    }
       arr.splice(startingPoint, elToRemove)
   }
    



    for(let l = 0 ; l < arr.length ; l++){
        totalSum += Number(arr[l])

    }
    console.log(totalSum);
}
bombNumbers([2, 1, 2, 1, 1, 1, 1, 4, 1, 1], [2, 5])