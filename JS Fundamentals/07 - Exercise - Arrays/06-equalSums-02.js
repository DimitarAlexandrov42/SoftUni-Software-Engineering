function equalSums(arr){

    let isFound = "no"

    for(let i = 0 ; i < arr.length ; i++){

        let leftSum = 0
        let rightSum = 0

        for(let l = 0 ; l < i  ; l++){
            leftSum += arr[l]
        }
        for(let r = i + 1 ; r < arr.length ; r++){
            rightSum += arr[r]
        }
        if(leftSum === rightSum){
            isFound = i
        }
        
    }
    console.log(isFound)

}
equalSums([1,2,2,3])