function fishTank(input){
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let fullSpace = Number(input[3]) / 100
    
    let totalFishTankVolume = (length * width * height)
    let totalVolumeFilledWithWater = (totalFishTankVolume * ( 1 - fullSpace))/1000

    console.log(totalVolumeFilledWithWater)
}
fishTank(["105","77","89","18.5"])