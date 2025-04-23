function training(input){
    
    let isFinish = false

     for(x = 1 ; x <= 10 ; x++){
        isFinish = true
        for(y = 1 ; y <= 10 ; y++){
            console.log(`${x} * ${y}`)
            if(y === 5){
                
                break
            }
        }
        if(isFinish){
            break
         }
     }
     


}
training()