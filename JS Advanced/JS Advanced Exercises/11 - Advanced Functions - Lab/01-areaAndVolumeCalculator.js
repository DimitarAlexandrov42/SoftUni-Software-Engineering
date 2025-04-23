function areaAndVolumeCalculator(area, vol, data) {
    let result = []
    data = JSON.parse(data)
    for (const iterator of data) {
        let volume = vol.call(iterator)
        let area1 = area.call(iterator)
        result.push({
            area: area1,
            volume: volume
        })
    }
    
    return result

}
areaAndVolumeCalculator
    (area, vol, `[{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}]`)


function area() {
    return Math.abs(this.x * this.y)
}
function vol() {
    return Math.abs(this.x * this.y * this.z)
}
