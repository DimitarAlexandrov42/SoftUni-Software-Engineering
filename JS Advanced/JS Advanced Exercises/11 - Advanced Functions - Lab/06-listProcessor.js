function listProcessor(par) {
    let result = ''
    let obj = {
        add(word) {
            result += String(word) + ","
        },
        remove(word) {
            result = result.split(',').filter((w) => w !== word).join(',')
           
        },
        print() {
            console.log(result.substring(0, result.length - 1))
        }
    }
    for (const info of par) {
        let [command, text] = info.split(" ")
        obj[command](text)
    }

  
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])