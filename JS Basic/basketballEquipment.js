function basketballEquipment(input) {
    let yearlyTax = Number(input[0])
    let basketballShoesDisscount = (yearlyTax * 40/100)
    let basketballShoes = (yearlyTax - basketballShoesDisscount)
    let basketballOutfitDiscount = (basketballShoes * 20/100)
    let basketballOutfit = (basketballShoes - basketballOutfitDiscount)
    let basketballBall = (basketballOutfit * 1/4)
    let accessories = (basketballBall * 1/5)

    let totalMoneyForBasketball = (yearlyTax + basketballShoes + basketballOutfit + basketballBall + accessories)

console.log(totalMoneyForBasketball)
}
basketballEquipment(["550"])