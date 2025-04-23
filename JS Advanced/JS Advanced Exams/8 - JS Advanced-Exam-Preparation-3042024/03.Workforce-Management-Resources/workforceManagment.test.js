import workforceManagement from "./workforceManagement.js";
import { assert } from "chai"
import { describe, it } from "mocha";

describe("workforceManagment Tests", function () {
    describe("recruitStaff tests", function () {

        it("hired employee", function () {
            let name = "Stoil"
            let role = "Developer"
            assert.equal(workforceManagement.recruitStaff(name, role, 8), `${name} has been successfully recruited for the role of ${role}.`)
            assert.equal(workforceManagement.recruitStaff(name, role, 11), `${name} has been successfully recruited for the role of ${role}.`)
        });
        it("not suitable employee", function () {
            let name = "Petar"
            let role = "Developer"
            assert.equal(workforceManagement.recruitStaff(name, role, 1), `${name} is not suitable for this role.`)
            assert.equal(workforceManagement.recruitStaff(name, role, 2), `${name} is not suitable for this role.`)
        });

        it("role test", function () {
            assert.throw(() => workforceManagement.recruitStaff("Developer"), `We are not currently hiring for this role.`)
        });
    });
    describe("computerWages tests", () => {
        it("current wage", () => {
            assert.equal(workforceManagement.computeWages(120), 120 * 18)
            assert.equal(workforceManagement.computeWages(160), 160 * 18)
        })
        it("additional bonus", () => {
            assert.equal(workforceManagement.computeWages(161), 161 * 18 + 1500)
            assert.equal(workforceManagement.computeWages(280), 280 * 18 + 1500)
        })
       
    })
    describe("dismissEmployee tests", () => {
        it("test workforce", () => {
            let team = ["Krustio", "Todor", "Ivailo", "Dimitar", "Iskren"]


            assert.equal(workforceManagement.dismissEmployee(team, 3), ["Krustio", "Todor", "Ivailo", "Iskren"].join(", "))
            assert.equal(workforceManagement.dismissEmployee(team, 1), ["Krustio", "Ivailo", "Dimitar", "Iskren"].join(", "))
            assert.equal(workforceManagement.dismissEmployee(team, 4), ["Krustio", "Todor", "Ivailo", "Dimitar"].join(", "))
        })
        
        it("validation workforce", () => {
            assert.throw(() => workforceManagement.dismissEmployee(undefined, 3), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee([], 45), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee(null, 4), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee("shokolad", 1), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee({}, 89), "Invalid input")
        })

        it("validation index", () => {
            let team = ["Krustio", "Todor", "Ivailo", "Dimitar", "Iskren"]
        
            assert.throw(() => workforceManagement.dismissEmployee(team, null), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee(team, ""), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee(team, "vafli"), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee(team, []), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee(team, undefined), "Invalid input")
            assert.throw(() => workforceManagement.dismissEmployee(team, {}), "Invalid input")
        })
        it("input validation", () => {
            assert.throw(() => workforceManagement.computeWages(-56), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages("Banica"), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages(null), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages({}), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages([]), "Invalid hours")
            assert.throw(() => workforceManagement.computeWages(undefined), "Invalid hours")
        })
    })
});
