const expect = import('chai').expect
const sum = import(`./04-sum-of-numbers`)

describe('Sum of numbers',()=>{

    it('Should return the sum of the numbers in the array',()=>{
         let numbers = [1,2,3,4,5]
         let expectedSum = 15
         let actualSum = sum(numbers)

         expect(actualSum).to.equal(expectedSum)
    })

    it('Should return the sum with negative number in the array',()=>{
        let numbers = [1,2,3,4,-5]
        let expectedSum = 5
        let actualSum = sum(numbers)

        expect(actualSum).to.equal(expectedSum)
   })
   it('Should return 0 if all numbers in the array equal 0',()=>{
    let numbers = [0,0,0,0]
    let expectedSum = 0
    let actualSum = sum(numbers)

    expect(actualSum).to.equal(expectedSum)
})
})