function tradeComissions(input) {
    let city = input[0]
    let sum = Number(input[1])
    let percent = 0
    switch (city) {
        case "Sofia":
            if (0 <= sum && sum <= 500) {
                percent = sum * 0.05
                console.log(percent.toFixed(2))
            } else if (500 < sum && sum <= 1000){
                percent = sum * 0.07
                console.log(percent.toFixed(2))
            }else if(1000 < sum && sum <= 10000){
                percent = sum * 0.08
                console.log(percent.toFixed(2))
            }else if(sum > 10000){
              percent = sum * 0.12
               console.log(percent.toFixed(2))
            }else{
                console.log("error")
            } ; break ; 


    case "Varna":
        if (0 <= sum && sum <= 500) {
            percent = sum * 0.045
            console.log(percent.toFixed(2))
        } else if (500 < sum && sum <= 1000){
            percent = sum * 0.075
            console.log(percent.toFixed(2))
        }else if(1000 < sum && sum <= 10000){
            percent = sum * 0.10
            console.log(percent.toFixed(2))
        }else if(sum > 10000){
          percent = sum * 0.13
           console.log(percent.toFixed(2))
        } else{
            console.log("error")
        } ; break ; 
        case "Plovdiv":
            if (0 <= sum && sum <= 500) {
                percent = sum * 0.055
                console.log(percent.toFixed(2))
            } else if (500 < sum && sum <= 1000){
                percent = sum * 0.08
                console.log(percent.toFixed(2))
            }else if(1000 < sum && sum <= 10000){
                percent = sum * 0.12
                console.log(percent.toFixed(2))
            }else if(sum > 10000){
              percent = sum * 0.145
               console.log(percent.toFixed(2))
            } else{
                console.log("error")
            } ; break ; 
        default: console.log("error")

    }



}
tradeComissions(["Varna", "-50"])