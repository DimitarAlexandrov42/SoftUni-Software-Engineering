function addAndSubrtract(arr){

    let newArr = []
    let arrSum = 0
    let newArrSum = 0

    for(let i = 0 ; i < arr.length ; i++){

        arrSum+= Number(arr[i])

        if(arr[i] % 2 === 0){
            arr[i]+= i
            newArrSum += Number(arr[i])
            newArr[i] = arr[i]
        }else{
            arr[i]-= i
            newArrSum += Number(arr[i])
            newArr[i] = Number(arr[i])
        }
       
    }
  console.log(newArr);
  console.log(arrSum);
  console.log(newArrSum);

}
addAndSubrtract([5, 15, 23, 56, 35])