function cookingByNumber(number, ope1, ope2, ope3, ope4, ope5) {

    let currNumber = Number(number)

    let operations = []
    operations.push(ope1)
    operations.push(ope2)
    operations.push(ope3)
    operations.push(ope4)
    operations.push(ope5)

    let manipulatedNum = 0

    for (let i = 0; i < operations.length; i++) {
        let command = operations[i]

        

        switch (command) {
            case 'chop': currNumber /= 2
                console.log(currNumber); break
            case 'dice': currNumber = Math.sqrt(currNumber)
            console.log(currNumber);
                ; break
            case 'spice': currNumber += 1
                console.log(currNumber);
                ; break
            case 'bake': currNumber *= 3
                console.log(currNumber);
                ; break
            case 'fillet':
                currNumber *= 0.80
                console.log(currNumber.toFixed(1));
                ; break

        }

    }
}
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake',
'fillet'
)

function cookingByNumbers(num, ...actions) {
    let number = +num;
 
    let handler = {
        chop(number) {
            return number / 2;
        },
        dice(number) {
            return Math.sqrt(number);
        },
        spice(number) {
            return number+=1;
        },
        bake(number) {
            return number *= 3;
        },
        fillet(number) {
            return number * 0.8;
        }
    };
 
    for (const action of actions) {
        number = handler[action](number);
        console.log(number);
    }
}
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake',
'fillet')