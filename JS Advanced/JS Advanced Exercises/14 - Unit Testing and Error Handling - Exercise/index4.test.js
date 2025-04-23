import  mathEnforcer  from './index4.js'
import * as chai from 'chai'
const assert = chai.assert

describe('mathEnForcer function tests', () => {
    describe('addFive function test', () => {
        //incorrect inputs
        it(`should return undefined if the input is a string`, () => {
            assert.equal(mathEnforcer.addFive("trala"), undefined);
        })
        it(`should return undefined if the input is an object`, () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        })
        it(`should return undefined if the input is an array`, () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        })
        it(`should return undefined if the input is undefined`, () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        })
        it(`should return undefined if the input is null`, () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        })
        // correct inputs 
        it(`positive number`, () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        })
        it(`negative number`, () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        })
        it(`decimal number`, () => {
            assert.equal(mathEnforcer.addFive(4.4), 9.4);
        })
    })
    describe('subtractTen function test', () => {
        //incorrect inputs
        it(`should return undefined if the input is a string`, () => {
            assert.equal(mathEnforcer.subtractTen("trala"), undefined);
        })
        it(`should return undefined if the input is an object`, () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        })
        it(`should return undefined if the input is an array`, () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        })
        it(`should return undefined if the input is undefined`, () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        })
        it(`should return undefined if the input is null`, () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        })
        // correct inputs 
        it(`positive number`, () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        })
        it(`negative number`, () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        })
        it(`decimal number`, () => {
            assert.equal(mathEnforcer.subtractTen(4.4), -5.6);
        })
    })
    describe('sum function test', () => {
        it(`should return undefined if the first input is a string`, () => {
            assert.equal(mathEnforcer.sum("trala", 5), undefined);
        })
        it(`should return undefined if the first input is an object`, () => {
            assert.equal(mathEnforcer.sum({}, 6), undefined);
        })
        it(`should return undefined if the first input is an array`, () => {
            assert.equal(mathEnforcer.sum([], 7), undefined);
        })
        it(`should return undefined if the input is undefined`, () => {
            assert.equal(mathEnforcer.sum(undefined, 8), undefined);
        })
        it(`should return undefined if the first input is null`, () => {
            assert.equal(mathEnforcer.sum(null, 9), undefined);
        })
        it(`should return undefined if the second input is a string`, () => {
            assert.equal(mathEnforcer.sum(10, "trala"), undefined);
        })
        it(`should return undefined if the second input is an object`, () => {
            assert.equal(mathEnforcer.sum(11, {}), undefined);
        })
        it(`should return undefined if the second input is an array`, () => {
            assert.equal(mathEnforcer.sum(12, []), undefined);
        })
        it(`should return undefined if the second input is undefined`, () => {
            assert.equal(mathEnforcer.sum(13, undefined), undefined);
        })
        it(`should return undefined if the both input is null`, () => {
            assert.equal(mathEnforcer.sum(14, null), undefined);
        })
        it(`should return undefined if the both input is a string`, () => {
            assert.equal(mathEnforcer.sum("trala", 'trala'), undefined);
        })
        it(`should return undefined if the both input is an object`, () => {
            assert.equal(mathEnforcer.sum({}, {}), undefined);
        })
        it(`should return undefined if the both input is an array`, () => {
            assert.equal(mathEnforcer.sum([], []), undefined);
        })
        it(`should return undefined if the both input is undefined`, () => {
            assert.equal(mathEnforcer.sum(undefined, undefined), undefined);
        })
        it(`should return undefined if the both input is null`, () => {
            assert.equal(mathEnforcer.sum(null, null), undefined);
        })
        // correct inputs 
        it(`positive numbers`, () => {
            assert.equal(mathEnforcer.sum(5,19), 24);
        })
        it(`negative numbers`, () => {
            assert.equal(mathEnforcer.sum(-5,-134), -139);
        })
        it(`decimal number`, () => {
            assert.equal(mathEnforcer.sum(4.4,5.5), 9.9);
        })
    })
})
