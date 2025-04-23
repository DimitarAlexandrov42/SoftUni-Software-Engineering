function rotateArray(arr, num) {
  
  let wArr = arr   

for(let i = 0 ; i < num ; i++){
  wArr.unshift(wArr.pop())

}
console.log(wArr.join(' '));



}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2)