function phoneBook(arr) {

    let obj = {}

    for (const person of arr) {
        let [name, number] = person.split(' ')
        obj[name] = number
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])