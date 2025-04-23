function multiplayTable(input){

    let num = input[0]

    let digA = Number(num[0])
    let digB = Number(num[1])
    let digC = Number(num[2])

    let result = 0


    for(let c = 1 ; c <= digC  ; c++){
        for(let b = 1 ; b <= digB ; b++){
            for(let a = 1 ; a <= digA ; a++){
                result = c * a * b
                console.log(`${c} * ${b} * ${a} = ${result};`)

            }
        }
    }
}
multiplayTable(["324"])