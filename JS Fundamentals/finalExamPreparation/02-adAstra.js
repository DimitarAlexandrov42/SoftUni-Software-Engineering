function adAstra(arr) {

    let text = arr.shift()
    let buff = []
    let totalCaloris = 0
    let pattern = /([|#])(?<name>([\w\s]+))\1(?<date>(\d{2}\/\d{2}\/\d{2}))\1(?<calories>\d{1,5})\1/g

    let match = pattern.exec(text)

    while (match) {
        totalCaloris += Number(match[6])
        buff.push(`Item: ${match[2]}, Best before: ${match[4]}, Nutrition: ${match[6]}`)
        match = pattern.exec(text)
    }
    let daysToEat = Math.floor(totalCaloris/2000)
    
       console.log(`You have food to last you for: ${daysToEat} days!`);
      for (const iterator of buff) {
        console.log(iterator);
      }


}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])