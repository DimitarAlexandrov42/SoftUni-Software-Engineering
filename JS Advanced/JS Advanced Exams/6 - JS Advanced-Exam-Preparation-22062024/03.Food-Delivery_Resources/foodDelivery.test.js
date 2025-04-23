import foodDelivery from "./food delivery.js"
import { assert } from "chai"
import { describe, it } from "mocha"


describe("Food Delivery Tests", () => {

    let orderedMenu = [{
        name: "Pizza",
        price: 10
    },
    {
        name: "Macaroni",
        price: 8
    }, {
        name: "Beef Steak",
        price: 14
    }]


    it("Category Tests", () => {
        assert.equal(foodDelivery.getCategory("Vegan"), "Dishes that contain no animal products.")
        assert.equal(foodDelivery.getCategory("Vegetarian"), "Dishes that contain no meat or fish.")
        assert.equal(foodDelivery.getCategory("Gluten-Free"), "Dishes that contain no gluten.")
        assert.equal(foodDelivery.getCategory("All"), "All available dishes.")
    })

    it("Category error test", () => {
        assert.throw(() => foodDelivery.getCategory([]), "Invalid Category!")
    })


    it("addMenuItems test", () => {
        

        assert.equal(foodDelivery.addMenuItem(orderedMenu,20),`There are 3 available menu items matching your criteria!`)
        assert.equal(foodDelivery.addMenuItem(orderedMenu,6),`There are 0 available menu items matching your criteria!`)
        assert.equal(foodDelivery.addMenuItem(orderedMenu,8),`There are 1 available menu items matching your criteria!`)
    })

    it("addMenuItems error test",()=>{
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,4.99),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,4),"Invalid Information!")
    })
    it("addMenuItems length error test",()=>{
        assert.throw(()=>foodDelivery.addMenuItem([],10),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem([],11),"Invalid Information!")
    })
    it("addMenuItems menuItem type",()=>{
        assert.throw(()=>foodDelivery.addMenuItem({},10),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem("zdr",11),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(23,11),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(undefined,11),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(null,11),"Invalid Information!")
    })
    it("addMenuItems maxPrice type",()=>{
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,orderedMenu),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,"zdr"),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,{}),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,undefined),"Invalid Information!")
        assert.throw(()=>foodDelivery.addMenuItem(orderedMenu,null),"Invalid Information!")
    })

    it("calculateOrderCost tests",()=>{

        let shippingArr = ["standard","express","standard"]
        let addonsArr = ["beverage","beverage","sauce"]
        let trueDis = true
        let falseDis = false

        assert.equal(foodDelivery.calculateOrderCost(shippingArr,addonsArr,trueDis),`You spend $${(19*0.85).toFixed(2)} for shipping and addons with a 15% discount!`)
        assert.equal(foodDelivery.calculateOrderCost(shippingArr,addonsArr,falseDis),`You spend $19.00 for shipping and addons!`)

    })
    it("calculateOrderCost error tests",()=>{

        let shippingArr = ["standard","express","standard"]
        let addonsArr = ["beverage","beverage","sauce"]
        let trueDis = true
        let falseDis = false

        assert.throw(()=>foodDelivery.calculateOrderCost({},undefined,15),"Invalid Information!")
        assert.throw(()=>foodDelivery.calculateOrderCost(null,"zdr",[]),"Invalid Information!")

    })

})