function biggerHalf(arr) {

    let sorted = arr.sort((a, b) => a - b)
    let result = sorted.slice(Math.abs(arr.length / 2))
    console.log(result);

}
biggerHalf([3, 19, 14, 7, 2, 19, 6])




function biggerHal(input) {
    let sorted = input.sort((a, b) => a - b);
    let startIndex = Math.floor(sorted.length / 2);
    let endIndex = sorted.length;
    let newArr = sorted.slice(startIndex, endIndex);
    console.log(newArr);
  }
  biggerHal([3, 19, 14, 7, 2, 19, 6])