function countStringOccurennces(text, serchedWord){

let sentence = text.split(' ')
let counter = 0

for (const words of sentence) {
    if(words === serchedWord){
        counter++
    }
}
console.log(counter);
}
countStringOccurennces('softuni is great place for learning new programming languages', 'softuni')