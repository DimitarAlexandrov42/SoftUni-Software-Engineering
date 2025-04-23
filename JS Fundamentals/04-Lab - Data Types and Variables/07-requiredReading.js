function requiredReading(pagesToRead, pagesPerHour, numOfDays){
    
    let hoursOfReading = pagesToRead / pagesPerHour
    let hoursPerDayForRead = hoursOfReading / numOfDays

    console.log(hoursPerDayForRead);

}
requiredReading(212, 20 ,2)