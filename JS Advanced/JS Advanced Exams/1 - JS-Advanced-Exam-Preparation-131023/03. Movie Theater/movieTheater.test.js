import movieTheater from "./03. Movie Theater.js";
import { assert } from "chai"

describe("movieTheater tests", () => {
    it("Age restrictions for all ages test", () => {
        assert.equal(movieTheater.ageRestrictions('G'), `All ages admitted to watch the movie`)
    })
    it("Parental guidance test", () => {
        assert.equal(movieTheater.ageRestrictions('PG'), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
    })
    it("Restricted under 17 requires accompanying parent test", () => {
        assert.equal(movieTheater.ageRestrictions('R'), `Restricted! Under 17 requires accompanying parent or adult guardian`)
    })
    it("No one under 17 test", () => {
        assert.equal(movieTheater.ageRestrictions('NC-17'), `No one under 17 admitted to watch the movie`)
    })
    it("There are no age restrictions", () => {
        assert.equal(movieTheater.ageRestrictions(), `There are no age restrictions for this movie`)
    })
    it("moneySpent wrong tests", () => {
        assert.throws(() => movieTheater.moneySpent("s", {}, undefined), "Invalid input")
        assert.throws(() => movieTheater.moneySpent(null, 4, {}), "Invalid input")
        assert.throws(() => movieTheater.moneySpent({}, 6, "s"), "Invalid input")
        assert.throws(() => movieTheater.moneySpent(undefined, null, {}), "Invalid input")
        assert.throws(() => movieTheater.moneySpent(null, undefined, null), "Invalid input")
    })
    it("moneySpent test 50% discount", () => {
        assert.equal(movieTheater.moneySpent(3, ["Nachos"], ["Soda"]), `The total cost for the purchase with applied discount is ${((45 + 8.50) * 0.8).toFixed(2)}`)
    })
    it("moneySpent no discount", () => {
        assert.equal(movieTheater.moneySpent(2, ["Nachos"], ["Soda"]), `The total cost for the purchase is 38.50`)
        assert.equal(movieTheater.moneySpent(2, ["Popcorn"], ["Water"]), `The total cost for the purchase is 36.00`)
    })
    it("reservation function test with wrong inputs", () => {
        assert.throws(() => movieTheater.reservation({}, "s"), "Invalid input")
        assert.throws(() => movieTheater.reservation(null, undefined), "Invalid input")
        assert.throws(() => movieTheater.reservation(4, []), "Invalid input")
        assert.throws(() => movieTheater.reservation({}, {}), "Invalid input")
        assert.throws(() => movieTheater.reservation("s", "s"), "Invalid input")
    })
    it("reservation function test with correct inputs", () => {
        assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 10, freeSeats: 5 }], 5),10 )
    })

})