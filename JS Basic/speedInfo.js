function speedInfo(input){
    let speed = Number(input[0])
    
    if(speed <= 10){
        console.log("slow")
    }
    else if( 50 >= speed && speed > 10){
        console.log("average")
    } else if( 150 >= speed && speed > 50){
        console.log("fast")
    } else if ( 1000 >= speed && speed > 150. ){
     console.log("ultra fast")
    } else { 
        console.log("extremely fast")
        } 

}
speedInfo(["99."])