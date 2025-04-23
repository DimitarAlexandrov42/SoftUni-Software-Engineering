function heroesOfCodeAndLogicVII(arr) {

    let numberOfHeroes = arr.shift()

    let heroes = {}

    for (let i = 0; i < numberOfHeroes; i++) {
        let tempPlayer = arr.shift()
        let [name, hp, mp] = tempPlayer.split(' ')

        heroes[name] = {
            hp: Number(hp),
            mp: Number(mp)
        }

    }
    let command = arr.shift()

    while (command !== 'End') {

        let [...tokens] = command.split(' - ')
        let command1 = tokens[0]
        let name = tokens[1]
        let p1 = Number(tokens[2])
        let p2 = tokens[3]

        let ourPlayer = heroes[name]

        switch (command1) {
            case 'Heal':
                let hp = Math.min((100 - ourPlayer.hp), p1)
                ourPlayer.hp += hp

                console.log(`${name} healed for ${hp} HP!`);

                ; break
            case 'Recharge':
                let mp = Math.min((200 - ourPlayer.mp), p1)
                ourPlayer.mp += mp

                console.log(`${name} recharged for ${mp} MP!`);


                ; break
            case 'TakeDamage':
                ourPlayer.hp -= p1
                if (ourPlayer.hp <= 0) {
                    delete heroes[name]
                    console.log(`${name} has been killed by ${p2}!`);
                   
                    
                } else {
                    console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${ourPlayer.hp} HP left!`);

                }
                ; break
            case 'CastSpell':

                if (ourPlayer.mp >= p1) {
                    ourPlayer.mp -= p1
                    console.log(`${name} has successfully cast ${p2} and now has ${ourPlayer.mp} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${p2}!`);
                }

                ; break
        }

        command = arr.shift()
    }


    for (const [key, value] of Object.entries(heroes)) {
        console.log(`${key}\n  HP: ${value.hp}\n  MP: ${value.mp}`);
    }
}
heroesOfCodeAndLogicVII([
    `4`,
    `Adela 90 150`,
    `SirMullich 70 40`,
    `Ivor 1 111`,
    `Tyris 94 61`,
    `Heal - SirMullich - 50`,
    `Recharge - Adela - 100`,
    `CastSpell - Tyris - 1000 - Fireball`,
    `TakeDamage - Tyris - 99 - Fireball`,
    `TakeDamage - Ivor - 3 - Mosquito`,
    `End`
])