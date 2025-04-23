function lastTask(arr) {


    let result = []

    for (let i = 0; i < arr.length; i++) {

        let [command, text1, text2, text3, text4, text5, text6, text7, text8] = arr[i].split(` `)


        switch (command) {
            case "Chat":
                result.push(text1); break
            case "Delete": if (result.includes(text1)) 
            { let index2 = result.indexOf(text1)
                result.splice(index2,1)
                
             }
                ; break
            case "Edit": if(result.includes(text1)){
                let index = result.indexOf(text1)
                result.splice(index, 1, text2)
            }
                    ; break
            case "Pin":
                if (result.includes(text1)) {
                    let index1 = result.indexOf(text1)
                    result.splice(index1, 1)
                    result.push(text1)
                }
                ; break
            case "Spam": result.push(text1)
              if(text2 !== undefined)
               { result.push(text2)}
              if(text3 !== undefined)
               { result.push(text3)}
              if(text4 !== undefined)
               { result.push(text4)}
              if(text5 !== undefined)
               { result.push(text5)}
              if(text6 !== undefined)
               { result.push(text6)}
              if(text7 !== undefined)
               { result.push(text7)}
              if(text8 !== undefined)
               { result.push(text8)}
               
               
                    ; break

        }
        if (command === "end") {
            break
        }

    }
    console.log(result.join("\n"));



}
lastTask(["Chat John",

"Spam Let's go to the zoo",

"Edit zoo cinema",

"Chat tonight",

"Pin John",

"end"])