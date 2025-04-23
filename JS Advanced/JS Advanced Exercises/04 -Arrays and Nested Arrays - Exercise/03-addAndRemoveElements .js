function addAndRemoveElements(arr) {

    let newArr = []
     let currNum = 0
    for (let i = 0; i < arr.length; i++) {
        currNum+=1
        if (arr[i] === 'add') {
               newArr.push(currNum)
        } else if (arr[i] === 'remove') {
            newArr.pop()
        }
      

    }
    if(newArr.length === 0){
        console.log('Empty');
    }else{
console.log(newArr.join('\n'));
    }
}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)