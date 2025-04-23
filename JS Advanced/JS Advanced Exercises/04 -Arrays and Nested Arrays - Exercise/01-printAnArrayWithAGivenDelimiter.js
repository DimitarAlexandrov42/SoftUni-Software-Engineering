function printAnArrayWithAGivenDelimiter(arr,symbol){
let newArr=[]
for (const el of arr) {
    newArr.push(el)
}

console.log(newArr.join(`${symbol}`));


}
printAnArrayWithAGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'	)

function demo(arr1,sym1){
console.log(arr1.join(sym1));
}
demo(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'	)