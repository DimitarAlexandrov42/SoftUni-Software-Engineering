function mergeArrays(arr, arr2){

    let newArr = []

    for(let i = 0 ; i < arr.length ; i++){

        if(i % 2 === 0){
            newArr[i] = Number(arr[i]) + Number(arr2[i])
        }else{
             newArr[i] = arr[i] + arr2[i]
        }
        

    }
console.log(newArr.join(" - "));

}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])