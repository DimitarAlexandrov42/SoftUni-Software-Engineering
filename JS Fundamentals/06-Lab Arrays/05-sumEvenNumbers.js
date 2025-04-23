function sumEvenNumbers(arr){

     let totalSum = 0

    for(let i = 0 ; i < arr.length ; i++){
          let currentPar = Number(arr[i])
          if(currentPar % 2 === 0){
            totalSum+= currentPar
          }

   }
 console.log(totalSum);

}
sumEvenNumbers(['1','2','3','4','5','6'])