function houseParty(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ")
        if (command.length === 3) {
            if (result.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`);
            } else {
                result.push(String(command[0]))
            }
        } else {
            if (!result.includes(command[0])) {
                console.log(`${command[0]} is not in the list!`);
            } else {
                let index = result.indexOf(command[0])
                result.splice(index, 1)
            }
        }

    }
    console.log(result.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)