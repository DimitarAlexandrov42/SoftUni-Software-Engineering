function adAstra(arr) {

    let text = arr.shift()
    let buff = []
    let totalCaloris = 0
    let pattern = /([|#])(?<name>([\w\s]+))\1(?<date>(\d{2}\/\d{2}\/\d{2}))\1(?<calories>\d{1,5})\1/g

    let match = pattern.exec(text)

    while (match) {
      
        console.log(match.groups.calories);
        match = pattern.exec(text)
    }
   


}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])