function suppliesForSchool(input){
    let packOfPens = Number(input[0]) * 5.80
    let packOfMarkers = Number(input[1]) * 7.20
    let detergent = Number(input[2]) * 1.20
    let discountPercent = Number(input[3])
    let realDiscount = discountPercent / 100

    let totalDiscount = (packOfPens + packOfMarkers + detergent) * realDiscount
    let discountedBill = (packOfPens + packOfMarkers + detergent) - totalDiscount

    console.log(discountedBill)

}
suppliesForSchool(["2","3","4","25"])