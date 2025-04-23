function adressBook(arr) {

    let obj = {}

    for (const inf of arr) {
        let [name, place] = inf.split(':')
        obj[name] = place
    }

    let sortedNewObject = Object.keys(obj).sort()

    for (const keys of sortedNewObject) {
        console.log(`${keys} -> ${obj[keys]}`);
    }

}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])