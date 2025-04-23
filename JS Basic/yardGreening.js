function yardGreening(input){
    let totalVolumeOfTheYard = input[0]
    let priceForKvM = 7.61
    let Discount = (18/100)

    let totalPriceForTheYard = priceForKvM * totalVolumeOfTheYard
    let totalDiscountForTheVolume =  totalVolumeOfTheYard * priceForKvM * Discount
    let finalPrice = totalPriceForTheYard - totalDiscountForTheVolume




    console.log("The final price is: "+ finalPrice + " lv.")
    console.log("The discount is: " + totalDiscountForTheVolume + " lv.")
}
yardGreening(["150"])