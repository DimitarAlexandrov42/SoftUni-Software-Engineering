function streamOfLetters(input) {

    index = 0
    let command = input[index]
    index++

    let buff = ""
    let commandLettersC = "c"
    let commandLettersO = "o"
    let commandLettersN = "n"

    let buffC = ""
    let buffO = ""
    let buffN = ""

    let buffCon = ""



    while (command !== "End") {

        if(command === commandLettersC){
            buffCon += command
        }else if(buffCon === "c" && command === commandLettersO){
            buffCon += command
        }else if(buffCon === "co" && command === commandLettersN){
            buffCon += command

        }








        if (command === commandLettersC) {
            if (command === buffC) {
                buffCon += command
            } else {
                buffC += command
                buff += " "
            }

        }

        else if (command === commandLettersO) {
            if (buffCon === "c") {
                buffCon += command
            } else if (command === buffO) {
                buff += command
            } else {
                buffO += command

            }
        } else if (command === commandLettersN) {
            if (command === buffN) {
                buffCon += command
            }
            buffN += command

        } else {

            buff += command
        }

        if (buffCon === "con") {
            break
        }






        command = input[index]
        index++

Symbol
    }

    console.log(buff)


}
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n","\ ", "A","D", "End" ])