function passwordReset(arr) {

    let password = arr.shift()

    i = 0
    let line = arr.shift()

    while (line !== 'Done') {

        let [command, ...tokens] = line.split(' ')

        switch (command) {

            case 'TakeOdd':
                password.split('')
                let buff = []
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        buff.push(password[i])
                    }
                }
                password = buff.join('')
                console.log(password);
                ; break
            case 'Cut':
                let buff1 = password.substring(Number(tokens[0]), Number(tokens[0]) + Number(tokens[1]))
                password = password.replace(buff1, '')
                console.log(password);
                ; break
            case 'Substitute':
                if (password.includes(tokens[0])) {
                    while (password.includes(tokens[0])) {
                        password = password.replace(tokens[0], tokens[1])
                    }
                    console.log(password);
                } else if (!password.includes(tokens[0])) {
                    console.log('Nothing to replace!');
                }
                ; break

        }

        line = arr.shift()

    }

    if (line === 'Done') {
        console.log(`Your password is: ${password}`);
    }

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]))