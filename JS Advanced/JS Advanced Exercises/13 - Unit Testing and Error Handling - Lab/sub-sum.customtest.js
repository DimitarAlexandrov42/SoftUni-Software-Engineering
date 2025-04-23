
const solve = require('./sub-sum')


function test() {

    let expectedSum = 150
    let numbers = [10, 20, 30, 40, 50, 60]
    let startIndex = 3
    let endIndex = 300

    let actualSum = solve(numbers, startIndex, endIndex)
 
    assert.equal(actualSum, expectedSum)
   if(actualSum == expectedSum){
    console.log('correct');
   }else{
    console.log('Error');
   }

}

test()