function seconTask(arr) {

    let command = arr.shift().split(`>>`)

    let familyTax = 0
    let heavyDutyTax = 0
    let sportsTax = 0
    let totalTax = 0

    for (let i = 0; i < command.length; i++) {

        let [type, year, kilometers] = command[i].split(" ")

        switch (type) {
            case "family": familyTax += 50 - (year * 5)
                familyTax += Math.floor(kilometers / 3000) * 12
                totalTax += familyTax
                console.log(`A family car will pay ${familyTax.toFixed(2)} euros in taxes.`)
                familyTax = 0
                ; break
            case "heavyDuty":
                heavyDutyTax += 80 - (year * 8)
                heavyDutyTax += Math.floor(kilometers / 9000) * 14
                totalTax += heavyDutyTax
                console.log(`A heavyDuty car will pay ${heavyDutyTax.toFixed(2)} euros in taxes.`)
                heavyDutyTax = 0;
                ; break
            case "sports": sportsTax += 100 - (year * 9)
                sportsTax += Math.floor(kilometers / 2000) * 18
                totalTax += sportsTax
                console.log(`A sports car will pay ${sportsTax.toFixed(2)} euros in taxes.`)
                sportsTax = 0;
                ; break
            default: console.log(`Invalid car type.`);
                ; break

        }

    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);


}
seconTask(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])