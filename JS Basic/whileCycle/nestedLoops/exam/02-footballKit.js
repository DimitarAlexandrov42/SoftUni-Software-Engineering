function footballKit(input){

    let tShirtPrice = Number(input[0])
    let goalSum = Number(input[1])

    let shortsPrice = tShirtPrice *0.75
    let socks = shortsPrice *0.20 
    let buttons = 2*(tShirtPrice + shortsPrice)
    let disscountCard = 0.15

    let totalDiscount = (tShirtPrice + shortsPrice + socks + buttons)*disscountCard

    let totalSum =  (tShirtPrice + shortsPrice + socks + buttons)- totalDiscount

    if(totalSum >= goalSum){
    console.log(`Yes, he will earn the world-cup replica ball!`)
    console.log(`His sum is ${totalSum.toFixed(2)} lv.`)
    }else{
        let neededsum = goalSum - totalSum
        console.log(`No, he will not earn the world-cup replica ball.`)
        console.log(`He needs ${neededsum.toFixed(2)} lv. more.`)

    }
}
footballKit(["25", "100"])
