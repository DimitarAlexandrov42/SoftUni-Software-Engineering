function condenseArrayToNumber(arr){
     
     let secArr = []

    while(arr.length > 1){
        for(let i = 0 ; i < arr.length - 1 ; i++){
            secArr[i] = arr[i] + arr[i+1]

        }
        arr = secArr
        secArr = []

    }
console.log(Number(arr));

}
condenseArrayToNumber([5, 0, 4, 1, 2])