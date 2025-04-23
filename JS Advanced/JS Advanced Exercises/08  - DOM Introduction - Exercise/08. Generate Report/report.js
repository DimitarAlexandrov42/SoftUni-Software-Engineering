function generateReport() {
    let tableRow = document.querySelectorAll('tbody tr')
    let tableHeader = document.querySelectorAll('thead tr th')

    let res = []

    for (let i = 0; i < tableRow.length; i++) {
 
        let tableData = tableRow[i].cells
        let tempData = {}
        for (let z = 0; z < tableData.length; z++) {
            let infoTheader = tableHeader[z].childNodes

            if (infoTheader[1].checked === true) {
                tempData[infoTheader[0].textContent.trim().toLocaleLowerCase()] = tableData[z].textContent
            }
        }
        res.push(tempData)
    }
    let jsonRes = JSON.stringify(res)
    document.getElementById('output').textContent = jsonRes
}