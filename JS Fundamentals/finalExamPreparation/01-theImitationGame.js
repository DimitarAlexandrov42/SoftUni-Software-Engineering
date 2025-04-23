function theImitationGame(arr) {

    let massage = arr.shift()


    for (const line of arr) {
        let [...tokens] = line.split('|')

        switch (tokens[0]) {

            case 'ChangeAll':
                if (massage.includes(tokens[1])) {
                    while (massage.includes(tokens[1])) {
                        massage = massage.replace(tokens[1], tokens[2])
                    }
                }
                ; break
            case 'Insert':
                let buff = massage.substring(0, tokens[1])
                buff += tokens[2] += massage.substring(tokens[1])
                massage = buff
                    ; break
            case 'Move':
                for (let i = 0; i < tokens[1]; i++) {
                    let buff = massage.substring(1)
                    let buff1 = massage.substring(0, 1)
                    massage = buff += buff1
                }
                ; break
        }
    }

    console.log(`The decrypted message is: ${massage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)