function companyUsers(arr) {

    let obj = {}


    for (const data of arr) {
        let [company, id] = data.split(' -> ')

        if (!obj.hasOwnProperty(company)) {
            obj[company] = []
        }
         if(!obj[company].includes(id)){
            obj[company].push(id)
         }
       
    }
    
    let sortedArr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

    for (const [key, value] of sortedArr) {
        console.log(key);
        for (const iterator of value) {
            console.log(`-- ${iterator}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])