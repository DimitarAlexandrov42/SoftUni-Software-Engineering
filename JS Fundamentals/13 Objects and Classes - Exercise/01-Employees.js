function employees(arr){

    let myObj ={}


for (const name of arr){
    myObj[name] = name.length
     
}
for (const ime in myObj) {
    console.log(`Name: ${ime} -- Personal Number: ${ime.length}`);
}

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])