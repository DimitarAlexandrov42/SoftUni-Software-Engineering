function pirates(input) {
    let citiesInfo = {};
    let command = input.shift();
    
    while (command !== "Sail") {
        let [city, population, gold] = command.split('||');
        if (!citiesInfo.hasOwnProperty(city)) {
            citiesInfo[city] = {
                population: 0,
                gold: 0,
            };
        }
        citiesInfo[city].population += +population;
        citiesInfo[city].gold += +gold;
        command = input.shift();
    }
 
    input.pop();
 
    for (let line of input) {
        let [action, city, ...data] = line.split('=>');
        switch (action) {
            case 'Plunder':
                let people = +data[0];
                let gold = +data[1];
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                let newGold = citiesInfo[city].gold - gold;
                let newPeopleCount = citiesInfo[city].population - people;
                if (newGold <= 0 || newPeopleCount <= 0) {
                    console.log(`${city} has been wiped off the map!`)
                    delete citiesInfo[city];
                } else {
                    citiesInfo[city].population = newPeopleCount; 
                    citiesInfo[city].gold = newGold;
                }
                break;
            case 'Prosper':
                let goldToAdd = Number(data[0]);
                if (goldToAdd > 0) {
                    citiesInfo[city].gold += goldToAdd;
                    console.log(`${goldToAdd} gold added to the city treasury. ${city} now has ${citiesInfo[city].gold} gold.`)
                } else {
                    console.log("Gold added cannot be a negative number!");
                }
                break;
        }
    }
    let citiesCount = Object.keys(citiesInfo).length;
    if (citiesCount === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);
        for (const city in citiesInfo) {
            console.log(`${city} -> Population: ${citiesInfo[city].population} citizens, Gold: ${citiesInfo[city].gold} kg`);
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