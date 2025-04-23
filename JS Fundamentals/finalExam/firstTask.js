function firstTask(arr) {

    let string = arr.shift()


    let command = arr.shift()

    while (command !== 'Done') {

        let [...tokens] = command.split(' ')


        switch (tokens[0]) {

            case "Change":

                let newChar = String(tokens[2])

                while (string.includes(String(tokens[1]))) {

                    let indexOf = string.indexOf(tokens[1])

                    let buff = string.substring(0, indexOf)
                    let buff1 = string.substring(indexOf + 1)

                    string = buff + newChar + buff1

                    indexOf = string.indexOf(tokens[1])
                }
                console.log(string);

                ; break
            case "Includes":
                if (string.includes(String(tokens[1]))) {
                    console.log('True');
                } else {
                    console.log('False');
                }

                ; break
            case "End": if (string.endsWith(String(tokens[1]))) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }

                ; break
            case "Uppercase":
                string = string.toUpperCase()
                console.log(string);
            ; break
            case "FindIndex":
                  let indexOfChar = string.indexOf(String(tokens[1]))        
                  console.log(indexOfChar);  
            ; break
            case "Cut": 
            let cut = string.substring(tokens[1])
            cut = cut.substring(0,tokens[2])
            console.log(cut);
          
        
            ; break

        }

        command = arr.shift()
    }
}
firstTask((["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"]))