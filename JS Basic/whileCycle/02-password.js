function password(input){
    index = 0
    let user = input[index]
    index++
    let password = input[index]
    index++
    let command = input[index]
    index++
    while(command !== password){
        command = input[index]
        index++
     }
     console.log(`Welcome ${user}!`)

}
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])