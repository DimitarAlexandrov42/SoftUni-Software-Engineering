import bookSelection from "./solution.js";
import { assert } from "chai"

describe("isGenreSuitable test", () => {
    it("Age restrictions for genre Horror and Thriller", () => {
        assert.equal(bookSelection.isGenreSuitable("Horror", 10), `Books with Horror genre are not suitable for kids at 10 age`)
        assert.equal(bookSelection.isGenreSuitable("Thriller", 12), `Books with Thriller genre are not suitable for kids at 12 age`)
    })
    it("Positive test", () => {
        assert.equal(bookSelection.isGenreSuitable("Horror", 13), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable("Thriller", 14), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable("Horror", 18), `Those books are suitable`)
        assert.equal(bookSelection.isGenreSuitable("Thriller", 19), `Those books are suitable`)
    })
})
describe("isItAffordable test", () => {
    it("You have enough money test", () => {
        assert.equal(bookSelection.isItAffordable(5, 10), `Book bought. You have 5$ left`)
        assert.equal(bookSelection.isItAffordable(12, 55), `Book bought. You have 43$ left`)
        assert.equal(bookSelection.isItAffordable(11, 12), `Book bought. You have 1$ left`)
    })
    it("You don't have enough money test", () => {
        assert.equal(bookSelection.isItAffordable(12, 10), "You don't have enough money")
        assert.equal(bookSelection.isItAffordable(100, 55), "You don't have enough money")
        assert.equal(bookSelection.isItAffordable(15, 12), "You don't have enough money")
    })
    it("Validate the price and the budget test", () => {
        assert.throw(() => bookSelection.isItAffordable(null, null), "Invalid input")
        assert.throw(() => bookSelection.isItAffordable(undefined, undefined), "Invalid input")
        assert.throw(() => bookSelection.isItAffordable("v", "s"), "Invalid input")
        assert.throw(() => bookSelection.isItAffordable("r", 10), "Invalid input")
        assert.throw(() => bookSelection.isItAffordable(100, undefined), "Invalid input")
        assert.throw(() => bookSelection.isItAffordable(null, 12), "Invalid input")
    })
})
describe("suitableTitles test", () => {
    it("Wrong tests", () => {
        assert.throw(() => bookSelection.suitableTitles({}, "s"), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles(4, "v"), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles(null, "g"), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles({}, "v"), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles(undefined, "d"), "Invalid input")

        assert.throw(() => bookSelection.suitableTitles([], 4), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles([], null), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles([], undefined), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles([], {}), "Invalid input")
        assert.throw(() => bookSelection.suitableTitles([], []), "Invalid input")
    })
    it("correct tests", () => {
        assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller")["The Da Vinci Code"])
        assert.equal(bookSelection.suitableTitles([{ title: "5 vafli v moreto", genre: "Horror" }], "Horror")["The Da Vinci Code", "5 vafli v moreto"])

    })
    it("Not same ganre", () => {
        let input = [{ title: "The Da Vinci Code", genre: "Thriller" },
        { title: "The Da Vinci Code2", genre: "Horror" },
        { title: "The Da Vinci Code3", genre: "Thriller" }]

        let result = ["The Da Vinci Code", "The Da Vinci Code3"]

        assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), result.join(" "))
    })
})