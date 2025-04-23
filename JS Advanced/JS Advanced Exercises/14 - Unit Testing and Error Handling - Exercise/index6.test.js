import { describe, it, beforeEach } from 'mocha'
import {assert} from 'chai'
// const  assert  = chai.assert
import PaymentPackage from './index6.js'

describe("create instance", () => {
    let paymentPackage

    beforeEach(() => {
        paymentPackage = new PaymentPackage(`Todor`, 10)
    })

    it("name should be correct", () => {
        assert.equal(paymentPackage._name, `Todor`, `name has correct set to Todor`)
    })
    it("value should be correct", () => {
        assert.equal(paymentPackage._value,10, "value has correct set to 10")
    })
    it("VAT should be correct", () => {
        assert.equal(paymentPackage._VAT, 20, "VAT has correct set to 20")
    })
    it("active should be correct", () => {
        assert.ok(paymentPackage._active, true, "active has correct set to true")
    })
})