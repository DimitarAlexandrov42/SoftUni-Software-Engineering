function townPopulation(arr) {

    let obj = {}
    let result = ''
    for (const iterator of arr) {
        let [city, population] = iterator.split('<-> ')
        if (obj.hasOwnProperty(city)) {
            obj[city] += Number(population)
        } else {
            obj[city] = Number(population)
        }
    }
    // console.log(obj);


    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])