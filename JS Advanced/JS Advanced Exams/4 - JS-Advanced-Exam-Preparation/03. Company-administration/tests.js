import companyAdministration from "./companyAdministration.js";
import { assert } from "chai"

describe("hiringFunction tests", () => {
    it("hiringEmployee test", () => {
        let job = "Programmer"
        assert.throw(() => companyAdministration.hiringEmployee("Gancho", !job, 5), "We are not looking for workers for this position.")
    })
    it("Minimum requirement for hiring test", () => {
        assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 3), `Pesho was successfully hired for the position Programmer.`)
      
    })
    it("Requirement for hiring test",()=>{
        assert.equal(companyAdministration.hiringEmployee("Stefan", "Programmer", 5), `Stefan was successfully hired for the position Programmer.`)
    })
    it("Not approved test", () => {
        assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 1), `Pesho is not approved for this position.`)
        assert.equal(companyAdministration.hiringEmployee("Stefan", "Programmer", 2), `Stefan is not approved for this position.`)
    })
})
describe("calculateSalary tests", () => {
    it("Salary check test", () => {
        let payPerHour = 15
        assert.equal(companyAdministration.calculateSalary(20), payPerHour * 20)
        assert.equal(companyAdministration.calculateSalary(40), payPerHour * 40)

    })
    it("Salary check test with extra bonus", () => {
        let payPerHour = 15
       
        assert.equal(companyAdministration.calculateSalary(161), payPerHour * 161 + 1000)
        assert.equal(companyAdministration.calculateSalary(280), payPerHour * 280 + 1000)

    })
    it("input validating", () => {
        let payPerHour = 15
        assert.throw(() => companyAdministration.calculateSalary("Chushki"), `Invalid hours`)
        assert.throw(() => companyAdministration.calculateSalary(undefined), `Invalid hours`)
        assert.throw(() => companyAdministration.calculateSalary(null), `Invalid hours`)
        assert.throw(() => companyAdministration.calculateSalary(-15), `Invalid hours`)

    })
})
describe("firedEmployee tests", () => {
    let arr = ["Petar", "Ivan", "George","Dimityr","Svetlio","Iordan"]

    it("remove element test", () => {
       
        assert.equal(companyAdministration.firedEmployee(arr, 2),arr.splice(0,2).concat(arr.splice(1,5)).join(", "))
        
    })
    it("remove the first index",()=>{
        assert.equal(companyAdministration.firedEmployee(arr, 0),arr.splice(1,5).join(", "))
    })
    it("remove last index test",()=>{
        let arr = ["Petar", "Ivan", "George","Dimityr","Svetlio","Iordan"]

        assert.equal(companyAdministration.firedEmployee(arr, 5),arr.splice(0,5).join(", "))
    })
    it("invalid inputs", () => {
        let arr = ["Petar", "Ivan", "George","Dimityr","Svetlio","Iordan"]
        assert.throw(() => companyAdministration.firedEmployee({}, 2), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(null, 2), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(undefined, 2), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, 11), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, 12), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, 13), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, "vafla"), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, undefined), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, null), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, {}), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, []), "Invalid input")
        assert.throw(() => companyAdministration.firedEmployee(arr, -1), "Invalid input")
    })
})
