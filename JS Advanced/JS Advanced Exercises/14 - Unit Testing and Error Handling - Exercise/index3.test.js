
import lookupChar from './index3.js'
import * as chai from 'chai'
const assert = chai.assert

describe(`lookupChar function test`, () => {
    // invalid string input
    it('should return undefined if the string parameter is a number ', () => {
        assert.equal(lookupChar(4, 5), undefined)
    })
    it('should return undefined if the string parameter is a object ', () => {
        assert.equal(lookupChar({}, 5), undefined)
    })
    it('should return undefined if the string parameter is an array', () => {
        assert.equal(lookupChar([], 5), undefined)
    })
    it('should return undefined if the string parameter is a null ', () => {
        assert.equal(lookupChar(null, 5), undefined)
    })
    it('should return undefined if the string parameter is a undefined ', () => {
        assert.equal(lookupChar(undefined, 5), undefined)
    })
    // invalid index input
    it('should return undefined if the index parameter is a string', () => {
        assert.equal(lookupChar('o', "hello"), undefined)
    })
    it('should return undefined if the index parameter is an array', () => {
        assert.equal(lookupChar("v", []), undefined)
    })
    it('should return undefined if the index parameter is an object', () => {
        assert.equal(lookupChar("b", {}), undefined)
    })
    it('should return undefined if the index parameter is a null', () => {
        assert.equal(lookupChar("r", null), undefined)
    })
    it('should return undefined if the index parameter is a undefined', () => {
        assert.equal(lookupChar("o", undefined), undefined)
    })
    it('should return undefined if the index parameter is a undefined', () => {
        assert.equal(lookupChar("osho", 2.2), undefined)
    })
    //both parameters are invalid
    it('should return undefined if the index and string are ', () => {
        assert.equal(lookupChar([], []), undefined)
    })

    // invalid index length 
    it('should return Incorrect index if the index is a string length', () => {
        assert.equal(lookupChar("Tralala", 7), 'Incorrect index')
    })
    it('should return Incorrect index if the index is bigger than string length', () => {
        assert.equal(lookupChar("Tralala", 15), 'Incorrect index')
    })
    it('should return Incorrect index if the index is negative number', () => {
        assert.equal(lookupChar("Tralala", -7), 'Incorrect index')
    })
    // return correct character on the specific index
    it('should return character on the specific index', () => {
        assert.equal(lookupChar("Tralala", 4), 'a')
    })
    
}

)  