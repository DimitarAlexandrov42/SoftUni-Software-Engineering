function operationBetweenNumbers(input) {
  let N1 = Number(input[0])
  let N2 = Number(input[1])
   let argument = input[2]
   let result = 0
   

   switch(argument){
case"+": result = N1 + N2 ; break ; 
case"-": result = N1 - N2 ; break ; 
case"*": result = N1 * N2 ; break ; 
   }
   if(result % 2 === 0){
   oddOrEven = "even"
   }else{
    oddOrEven = "odd"
   }if(argument ==="+" || argument === "-" || argument ==="*"){
   console.log(`${N1} ${argument} ${N2} = ${result} - ${oddOrEven}`) }
   switch(argument){
case"/": result = N1 / N2 ; break ; 
case"%": result = N1 % N2 ; break ;}
if(N2 === 0 && argument !=="+" && argument !== "-" && argument !== "*"){
  console.log(`Cannot divide ${N1} by zero`)
}else if(argument === "/" && argument !=="+" && argument !== "-" && argument !== "*"){
  console.log(`${N1} ${argument} ${N2} = ${result.toFixed(2)}`)
}else if( argument !=="+" && argument !== "-" && argument !== "*"){
  console.log(`${N1} ${argument} ${N2} = ${result}`)
}
  
  
  
  }
operationBetweenNumbers(["20",

"3",

"+"])