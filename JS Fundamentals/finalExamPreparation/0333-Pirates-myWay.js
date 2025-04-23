function pirates(arr) {

    let obj = {}

    let command = arr.shift()

    while (command !== 'Sail') {

        let [name, population, gold] = command.split('||')

        if (obj.hasOwnProperty(name)) {
            if (Number(population) < 0) {
                Number(population) = 0
            }
            if (Number(gold) < 0) {
                Number(gold) = 0
            }
            obj[name][0] += Number(population)
            obj[name][1] += Number(gold)

        } else {


            obj[name] = [Number(population), Number(gold)]

        }
        command = arr.shift()
    }

    let command1 = arr.shift()

    while (command1 !== 'End') {

        let [comm, city, people, money] = command1.split('=>')





        switch (comm) {
            case 'Plunder':
                obj[city][0] -= Number(people)
                obj[city][1] -= Number(money)
                console.log(`${city} plundered! ${money} gold stolen, ${people} citizens killed.`);
                if (obj[city][0] <= 0 || obj[city][1] <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete obj[city]
                }
                ; break

            case 'Prosper': if (people < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                obj[city][1] += Number(people)
                console.log(`${people} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`);
            }
                ; break
        }
        command1 = arr.shift()
    }
    let counter = 0
    for (const iterator in obj) {
        counter++
    }
    if (counter === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
    else {
       
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        for (const [key, value] of Object.entries(obj)) {
            console.log(`${key} -> Population: ${value[0]} citizens, Gold: ${value[1]} kg`);
        }
    }

}
pirates([`Nassau||95000||1000`,
    `San Juan||930000||1250`,
    `Campeche||270000||690`,
    `Port Royal||320000||1000`,
    `Port Royal||100000||2000`,
    `Sail`,
    `Prosper=>Port Royal=>-200`,
    `Plunder=>Nassau=>94000=>750`,
    `Plunder=>Nassau=>1000=>150`,
    `Plunder=>Campeche=>150000=>690`,
    `End`])