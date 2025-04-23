import chooseYourCar from "./chooseYourCar.js";
import { describe,assert } from "chai"

describe("Test choosingType function", () => {
    it("Test does the year is in range", () => {
        assert.throws(() => chooseYourCar.choosingType("Sedan", "black", 1899), `Invalid Year!`)
        assert.throws(() => chooseYourCar.choosingType("Sedan", "black", 2023), `Invalid Year!`)
    })
    it("Does the value is different than `Sedan`", () => {
        let sedan = "Sedan"
        assert.throw(() => chooseYourCar.choosingType(!sedan, "black", 1980), "This type of car is not what you are looking for.")
    })
    it("Car is greater ot equal 2010", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "red", 2009), `This Sedan is too old for you, especially with that red color.`)
    })
    it("Car is below", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "red", 2010), `This red Sedan meets the requirements, that you have.`)
    })
})
describe("Wrong test brandName function", () => {
    it("Remove element from the array", () => {
        assert.throw(() => chooseYourCar.brandName({}, 3), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName(null, 3), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName(undefined, 3), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName("slo", 3), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName([], "s"), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName([], -11), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName(["BMW", "Toyota", "Mercedes"], 6), "Invalid Information!")
    })
    it("Correct test brandName function", () => {
        assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Mercedes"], 1), ["BMW", "Mercedes"].join(", "))
    })
})
describe("Test CarFuelConsumption function", () => {
    it("Efficient car test",()=> {
        assert.equal(chooseYourCar.carFuelConsumption(490, 34), `The car is efficient enough, it burns ${((34 / 490) * 100).toFixed(2)} liters/100 km.`)
        assert.equal(chooseYourCar.carFuelConsumption(500, 35), `The car is efficient enough, it burns ${((35 / 500) * 100).toFixed(2)} liters/100 km.`)
    })
    it("Car burns too much fuel", () => {
        assert.equal(chooseYourCar.carFuelConsumption(490, 35), `The car burns too much fuel - ${((35 / 490) * 100).toFixed(2)} liters!`)
    })
    it("Wrong validation of the input", () => {
        assert.throw(() => chooseYourCar.carFuelConsumption([], []), "Invalid Information!")
        assert.throw(() => chooseYourCar.carFuelConsumption({}, {}), "Invalid Information!")
        assert.throw(() => chooseYourCar.carFuelConsumption("s", "v"), "Invalid Information!")
        assert.throw(() => chooseYourCar.carFuelConsumption(null, null), "Invalid Information!")
        assert.throw(() => chooseYourCar.carFuelConsumption(undefined, undefined), "Invalid Information!")
    })

})