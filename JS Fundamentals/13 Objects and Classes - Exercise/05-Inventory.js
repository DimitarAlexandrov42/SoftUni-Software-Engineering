function inventory(arr) {

    let result = []

    for (const strings of arr) {

        let [name, level, items] = strings.split(' / ')

        let hero = {
            hero: String(name),
            level: Number(level),
            items: String(items)
        }
        result.push(hero)
    }
    result.sort((a, b) => a.level - b.level)

    for (const objects of result) {
        console.log(`Hero: ${objects.hero}`);
        console.log(`level => ${objects.level}`);
        console.log(`items => ${objects.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])