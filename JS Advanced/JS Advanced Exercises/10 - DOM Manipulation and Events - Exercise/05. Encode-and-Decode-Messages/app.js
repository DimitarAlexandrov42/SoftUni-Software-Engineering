function encodeAndDecodeMessages() {
    let message = document.querySelectorAll('body div main div textarea')[0]
    let buttonEncodeAndSend = document.querySelectorAll('body div main div button')[0]

    let lastReceivedMessage = document.querySelectorAll('body div main div textarea')[1]
    let buttonDecodeAndRead = document.querySelectorAll('body div main div button')[1]

    buttonEncodeAndSend.addEventListener('click', encode)
    buttonDecodeAndRead.addEventListener('click', decode)

    function encode(e) {
        if (lastReceivedMessage.value.length !== 0) {
            lastReceivedMessage.value = ""
        }
        

        for (const ch of message.value) {
            let charCode = ch.charCodeAt()
            lastReceivedMessage.value += String.fromCharCode(charCode + 1)
        }
       
        message.value = ""

    }
    function decode(e) {

        let decodedMessage = ""

        for (const ch of lastReceivedMessage.value) {
            let charCode = ch.charCodeAt()
            decodedMessage += String.fromCharCode(charCode - 1)
        }
        lastReceivedMessage.value = decodedMessage
        

    }
}

// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------2-----------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// function encodeAndDecodeMessages() {
//     let textAreas = document.querySelectorAll('textarea')
//     let buttons = document.querySelectorAll("button")

//     buttons[0].addEventListener('click', encode)
//     buttons[1].addEventListener('click', decode)

//     function encode(e) {
//         let encodedMessage = ""
//         let input = textAreas[0].value

//         for (let i = 0; i < input.length; i++) {
//             encodedMessage += String.fromCharCode(input[i].charCodeAt(0) + 1)
//         }
//         textAreas[1].value = encodedMessage
//         textAreas[0].value = ""
//     }

//     function decode(e){
//         let decodeMessage = ''
//         let input = textAreas[1].value
//         for(let i = 0 ;i < input.length ; i++){
//             decodeMessage +=String.fromCharCode(input[i].charCodeAt(0) -1)

//         }
//         textAreas[1].value = decodeMessage
//     }
// }
