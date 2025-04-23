class Laptop {
    info = {}
    isOn = false

    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand
        }
        this.quality = quality
    }
    turnOn() {
        this.isOn = true
        this.quality -= 1
        return this.isOn
    }
    turnOff() {
        this.isOn = false
        this.quality -= 1
        return this.isOn
    } showInfo() {
       return JSON.stringify({
        producer: this.info.producer,
        age: this.info.age,
        brand :this.info.brand

       })
    }
    price() {
        let price = Number(800 - (this.info.age * 2) + (this.quality * 0.5))
        return price
    }
}

let info = {
    producer: "Dell",
    age: 2, brand: "XPS"
}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
