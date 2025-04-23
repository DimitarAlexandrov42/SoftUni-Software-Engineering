// const assert = require('assert').strict
// const assert = require('chai').assert
const expect = require('chai').expect
const result = require('./sub-sum')

describe('Sub-sum Calculator', () => {
    it('Should calculate sub-sum when endIndex is larger than length', () => {
        let expectedSum = 150
        let numbers = [10, 20, 30, 40, 50, 60]
        let startIndex = 3
        let endIndex = 300

        let actualSum = result(numbers, startIndex, endIndex)

        // assert.equal(actualSum, expectedSum)
        expect(actualSum).to.equal(expectedSum)
    })

    it('Should return NaN if some of the elements in the array are different than number', () => {

        let numbers = [10, "twenty", 30, 40]
        let startIndex = 0
        let endIndex = 2


        expect(result(numbers, startIndex, endIndex)).to.be.NaN

    })

    it('Should return 0 when the array is empty', () => {
        let expectedSum = 0
        let numbers = []
        let startIndex = 1
        let endIndex = 2




        expect(result(numbers, startIndex, endIndex)).to.equal(expectedSum)
    })

    it('Should calculate sub-sum when the numbers from the array are decimals', () => {
        let expectedSum = 3.3
        let numbers = [1.1, 2.2, 3.3, 4.4, 5.5]
        let startIndex = -3
        let endIndex = 1

        let actualSum = result(numbers, startIndex, endIndex)

        // assert.equal(actualSum, expectedSum)
        expect(result(numbers,startIndex,endIndex)).to.be.closeTo(endIndex, 0.01);
    })

    it('Should calculate sub-sum when startIndex is lower than 0', () => {
        let expectedSum = 210
        let numbers = [10, 20, 30, 40, 50, 60]
        let startIndex = -3
        let endIndex = 300

        let actualSum = result(numbers, startIndex, endIndex)

        // assert.equal(actualSum, expectedSum)
        expect(actualSum).to.equal(expectedSum)
    })

    it('Should return NaN when non array is provided for first argument', () => {
        // assert.equal(Number.isNaN(solve(10,0,1)),true)

        expect(result(10, 1, 2)).to.be.NaN
        expect(result(true, 1, 2)).to.be.NaN
        expect(result({}, 1, 2)).to.be.NaN
        expect(result("10", 1, 2)).to.be.NaN
        expect(result(null, 1, 2)).to.be.NaN
        expect(result(undefined, 1, 2)).to.be.NaN

    })
})

