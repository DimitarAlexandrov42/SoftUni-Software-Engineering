function lettersCombination(input){
    let letter1= input[0];
    let letter2=input[1];
    let letter3=input[2];
    let startPosition=0;
    let endposition=0
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let buff=""
    let totalBuff=""
    let letter=''
    let counter=0
        for(let i=0;i<alphabet.length;i++){
             letter=alphabet[i];
 
            if(letter===letter1){
                startPosition=i
                letter1=startPosition
            }if(letter===letter2){
                endposition=i
                letter2=endposition
            }
        }
            for(let a=startPosition;a<=endposition;a++){
                letter=alphabet[a]
                let buffA=""
                if(letter!==letter3){
                    buffA+=letter
                }for(let b=startPosition;b<=endposition;b++){
                    letter=alphabet[b]
                    let buffB="";
                    if(letter!==letter3){
                        buffB+=letter
                    }for(let c=startPosition;c<=endposition;c++){
                        letter=alphabet[c]
                        let buffC="";
                        if(letter!==letter3){
                            buffC+=letter
                        }buff=(buffA+buffB+buffC)
                        if(buff.length===3){
                            totalBuff+=buff+" "
                            counter++
                        }
                    }
                }
            }console.log(totalBuff+counter);
 
}    