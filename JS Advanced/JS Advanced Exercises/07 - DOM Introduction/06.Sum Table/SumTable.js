function sumTable() {
    let supplies = document.querySelectorAll('table tr')
    let sum = 0
    for (let i = 1; i < supplies.length; i++) {
        let cols = supplies[i].children
        sum += Number(cols[cols.length - 1].textContent)
    }
document.getElementById('sum').textContent = sum
}
