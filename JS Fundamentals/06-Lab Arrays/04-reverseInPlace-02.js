function reverseInPlace(arr){

    for(let i = 0 ; i < arr.length / 2 ; i++){

        let currentEl = arr[i]
        let nextEl = arr[arr.length - 1 - i]
        arr[i] = nextEl
        arr[arr.length - 1 - i] = currentEl
    
    }
    console.log(arr.join(" "));
}


reverseInPlace(["1", "2", "3", "4", "5", "6", "7"])

