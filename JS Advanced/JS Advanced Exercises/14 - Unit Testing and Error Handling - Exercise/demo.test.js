
import { sumOfTwoNumbers } from './demo.js'
import * as chai from 'chai'
const assert = chai.assert

describe('sumOfTwoNumbers function test', () => {

    it('test with two numbers', () => {
        assert.equal(sumOfTwoNumbers(3, 4), 7)
        // expect(7).to.equal(sumOfTwoNumbers(3,4))
    })
    it('test with string and numbers', () => {
        assert.equal(sumOfTwoNumbers("3", 4),34)
    })


})

