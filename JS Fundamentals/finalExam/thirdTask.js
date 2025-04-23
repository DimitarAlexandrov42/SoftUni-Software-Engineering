function thirdTask(arr) {

    let capacityOfMassage = arr.shift()

    let obj = {}

    let command = arr.shift()

    while (command !== `Statistics`) {

        let [...tokens] = command.split('=')
        let action = tokens[0]
        let name = tokens[1]
        let sent = tokens[2]
        let received = tokens[3]


        switch (action) {
            case "Add":
                if (!obj.hasOwnProperty(tokens[1])) {
                    obj[name] = {
                        sent: Number(sent),
                        received: Number(received)
                    }
                } else {
                    break
                };

                ; break
            case "Message":
                obj[tokens[1]].sent += 1
                obj[tokens[2]].received += 1

                if (obj[tokens[1]].sent + obj[tokens[1]].received >= Number(capacityOfMassage)) {
                    console.log(`${tokens[1]} reached the capacity!`);
                    delete obj[tokens[1]]
                }
                if (obj[tokens[2]].sent + obj[tokens[2]].received >= Number(capacityOfMassage)) {
                    console.log(`${tokens[2]} reached the capacity!`);
                    delete obj[tokens[2]]
                }
                


                ; break
            case "Empty":
                if (tokens[1] === 'All') {
                    for (const key of Object.keys(obj)) {
                        delete obj[key]
                    }

                } else if (obj.hasOwnProperty(tokens[1])) {
                    delete obj[tokens[1]]

                }

                ; break
        }


        command = arr.shift()

    }
    let counter = 0
    for (const iterator of Object.entries(obj)) {
        counter++
    }
    console.log(`Users count: ${counter}`);
    for (const key in obj) {
        console.log(`${key} - ${obj[key].sent + obj[key].received}`);
    }



}
thirdTask([`12`,
    `Add=Bonnie=3=5`,
    `Add=Johny=4=4`,
    `Empty=All`,
    `Add=Bonnie=3=3`,
    `Statistics`])