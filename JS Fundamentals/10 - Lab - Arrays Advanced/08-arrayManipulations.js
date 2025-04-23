function arrayManipulations(arr){

    let newArr = arr.shift().split(` `).map(Number)
   

    for(let i = 0 ; i < arr.length ; i++){

        let [command, firstNum, secondNum] 
        = arr[i].split(` `)

        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        switch(command){
            case"Add" : newArr.push(firstNum)
            ; break
            case"Remove" : newArr = newArr.filter(e => e !== firstNum)
             ; break
            case"RemoveAt" : newArr.splice(firstNum,1 )
             ; break
            case"Insert" : newArr.splice(secondNum, 0, firstNum)
            ; break
         }

    }

console.log(newArr.join(` `));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])