function schoolGrades(arr) {

    let obj = {}

    for (const line of arr) {
        let studentArr = line.split(' ')
        let name = studentArr.shift()
        let grades = studentArr.map(x => Number(x))

        if (obj.hasOwnProperty(name)) {
            obj[name] = obj[name].concat(grades)
        } else {
            obj[name] = grades
        }
    }
    let sortedGrades = Object.keys(obj).sort()
    for (const person of sortedGrades) {

        let totalSumGrade = 0

        for (const grades of obj[person]) {
            totalSumGrade += grades / obj[person].length
        }
        console.log(`${person}: ${totalSumGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])