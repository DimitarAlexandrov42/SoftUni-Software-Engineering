function previousDay(year, month, day) {

    const prevDay = new Date(year, month - 1, day - 1)

    let date1 = prevDay.getDate()
    let year1 = prevDay.getFullYear()
    let month1 = prevDay.getMonth() + 1

    console.log(`${year1}-${month1}-${date1}`);

}
previousDay(2016, 9, 30)