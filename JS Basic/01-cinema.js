function cinema(input){
    let projType = input[0]
    let lines = Number(input[1])
    let columns = Number(input[2])
    let income = 0

    switch(projType){
        case "Premiere": income = lines * columns * 12;break;
        case "Normal":   income = lines * columns * 7.50;break;
        case "Discount": income = lines * columns * 5;break;
    }
 console.log(income.toFixed(2))
}
cinema(["Premiere",

"10",

"12"])