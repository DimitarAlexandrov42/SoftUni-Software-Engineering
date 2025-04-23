function repainting (input){
    let sumaZaNailon = Number(input[0])
    let sumaZaBoq = Number(input[1])
    let sumaZaRazreditel = Number(input[2]) * Number("5")
    let sumaZaTorbichki = Number("0.40") 
    let totalnoVremeZaRabota = Number(input[3])

    let totalnaSumaZaNailon = (sumaZaNailon + Number("2")) * Number("1.50")
    let totalnaSumaZaBoq = ((sumaZaBoq * 10/100) + sumaZaBoq ) * Number("14.50")
    let obshtaSumaZaMateriali = (totalnaSumaZaNailon + totalnaSumaZaBoq + sumaZaRazreditel + sumaZaTorbichki ) 
    let sumaZaMaistori = (obshtaSumaZaMateriali * 30/100) *totalnoVremeZaRabota

    let totalnaSumaZaVsichko = obshtaSumaZaMateriali + sumaZaMaistori

console.log(totalnaSumaZaVsichko)
}
repainting(["5","10","10","1"])