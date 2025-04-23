function foodDelivery(input){
    let chickenMenu = Number(input[0]) * Number("10.35")
    let fishMenu = Number(input[1]) * Number("12.40")
    let vegeterianMenu = Number(input[2]) * Number("8.15")
    let deliveryPrice = Number("2.50")
    let dessert = ((chickenMenu + fishMenu + vegeterianMenu) * (20/100))
    let totalPriceOfTheOrder = chickenMenu + fishMenu + vegeterianMenu + dessert + deliveryPrice
    

    console.log(totalPriceOfTheOrder)

}
foodDelivery(["9","2","6"])