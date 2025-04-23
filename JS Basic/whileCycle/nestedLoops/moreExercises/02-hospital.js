function hospital(input) {
    index = 0
    let days = Number(input[index])
    index++

    let doctors = 7
    let day = 0
    let threatedPatienct = 0
    let untreatedPatients = 0

    for (i = 1; i <= days; i++) {
        day++
        if (day % 3 === 0) {

            if (untreatedPatients > threatedPatienct) {
                doctors++
            }
        }
        let patientsPerDay = Number(input[index])
        index++
        if (patientsPerDay <= doctors) {
            threatedPatienct += patientsPerDay
        } else {
            untreatedPatients += patientsPerDay - doctors
            threatedPatienct += doctors
        }
    }
    console.log(`Treated patients: ${threatedPatienct}.\nUntreated patients: ${untreatedPatients}.`)
}
hospital(["4", "7", "27", "9", "1"])