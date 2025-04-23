function hotelRoom(input) {
    let month = input[0]
    let days = (input[1])
    let studio = 0
    let apartament = 0
    let totalStudioPrice = 0
    let totalApartamentPrice = 0
    switch (month) {
        case "May":
            studio = 50
            apartament = 65
            if (7 < days && days <= 14) {
                studio *= 0.95
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } else if (days > 14) {
                totalApartamentPrice = (days * apartament) * 0.9
                totalStudioPrice = (days * studio) * 0.7
            } else {
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } console.log(`Apartment: ${totalApartamentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`); break;
        case "June":
            studio = 75.20
            apartament = 68.70
            if (days < 14) {
                totalApartamentPrice = (days * apartament) * 0.90
                totalStudioPrice = (days * studio) * 0.80
            } else {
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } console.log(`Apartment: ${totalApartamentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`); break;
        case "July":
            studio = 76
            apartament = 77
            if (days > 14) {
                totalApartamentPrice = (days * apartament) * 0.90
                totalStudioPrice = (days * studio)
            } else {
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } console.log(`Apartment: ${totalApartamentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`); break;
        case "August":
            studio = 76
            apartament = 77
            if (days > 14) {
                totalApartamentPrice = (days * apartament) * 0.90
                totalStudioPrice = (days * studio)
            } else {
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } console.log(`Apartment: ${totalApartamentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`); break;
        case "September":
            studio = 75.20
            apartament = 68.70
            if (days < 14) {
                totalApartamentPrice = (days * apartament) * 0.90
                totalStudioPrice = (days * studio) * 0.80
            } else {
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } console.log(`Apartment: ${totalApartamentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`); break;
        case "October":
            studio = 50
            apartament = 65
            if (7 < days && days <= 14) {
                studio *= 0.95
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } else if (days > 14) {
                totalApartamentPrice = (days * apartament) * 0.9
                totalStudioPrice = (days * studio) * 0.7
            } else {
                totalApartamentPrice = (days * apartament)
                totalStudioPrice = (days * studio)
            } console.log(`Apartment: ${totalApartamentPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`); break;
    }
}
hotelRoom(["May",

    "15"])