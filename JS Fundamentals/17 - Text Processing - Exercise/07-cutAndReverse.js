function cutAndReverse(text) {

    let firstText = text.substring(0, text.length / 2).split('').reverse().join('')
    let secondText = text.substring(text.length / 2).split('').reverse().join('')

console.log(firstText);
console.log(secondText);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')