function sumPrimeNonPrime(input){
    index = 0 
    let command = input[index]
    index++

   
     let sumOfPrimeNumbers = 0 
     let sumOfNonprimeNumbers = 0 


    while(command !== "stop"){
        let number = Number(command)

        if(number < 0){
            console.log(`"Number is negative`)
            command = input[index]
            index++
            continue
         }
         let isPrime = true
         
         for(i = 2 ; i < number ; i++){
            if(number % i === 0){
               isPrime = false
            }

         }if(isPrime){
            sumOfPrimeNumbers += number
         }else{
            sumOfNonprimeNumbers += number
         }

        command = input[index]
        index++
    }
    console.log(sumOfNonprimeNumbers);
    console.log(sumOfPrimeNumbers);


} 
sumPrimeNonPrime(["3","9","0","7","19","4","stop"])