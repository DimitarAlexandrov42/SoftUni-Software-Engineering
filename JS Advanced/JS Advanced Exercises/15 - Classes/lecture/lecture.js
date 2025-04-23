class Cat {

    static letCount = 4
    static arr = [1, 2, 4, 5, 6, 7]
    static obj = {
        name: "Peter",
        age: 12,
        gender: "male"

    }

    hungry = true
    constructor(name) {
        this.name = name

    }

    makeSound() {
        console.log(`${this.name} say meow!`);
    }
    static vetCheck() {
        console.log('The cat should be fed!');
    }
}

let catNames = [
    "Papi",
    "Wiliam",
    "Gaby",
    "Megan",
    "Fossil",
    "Harry"
]

let firstCat = new Cat("Petar")
let secondCat = new Cat("Stihi")


class Dog {

}


let dog = new Dog()
console.log(dog instanceof Cat);
// return
let cats = catNames.map(x => new Cat(x))

cats.forEach(x => x.makeSound())

console.log(Cat.obj.age);