class Laptop {
    info = {};
    isOn = false;
    quality = 0; // това може и да го няма, пак работи
 
    constructor (info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        };
        this.quality = quality;
    }
 
    turnOn() {
        this.quality--;
        this.isOn = true;
        return this.isOn;
    }
    turnOff() {
        this.quality--;
        this.isOn = false;
        return this.isOn;
    }
 
    // showInfo(){
    //     let obj = JSON.stringify(info);
    //     return obj;
    // }
    showInfo() {
        return JSON.stringify({
            producer: this.info.producer,
            age: this.info.age,
            brand: this.info.brand,
        });
    }
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    };
}
 
let info = {producer: "Dell", age: 2, brand: "XPS"}; 
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price)
 
// let info = {producer: "Lenovo", age: 1, brand: "Legion"};
// let laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// laptop.turnOn();
// laptop.turnOff()