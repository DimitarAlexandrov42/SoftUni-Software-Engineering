class List {
    constructor() {
        this.result = []
        this.size = this.result.length

    }
    add(element) {
        this.result.push(element)
        this.result.sort((a, b) => a - b)
        this.size = this.result.length
    }
    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid Index!')
        }
        this.result.splice(index, 1)
        this.size = this.result.length


    }
    get(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid Index!')
        }
        return this.result[index]
    }
}
let list = new List();
list.add(5);
list.add(6);
console.log(list.result);
list.add(7);
list.remove(1)
console.log(list.result); 
console.log(list.get(1));
console.log(list.size);
