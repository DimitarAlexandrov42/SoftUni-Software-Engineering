function getFibonator() {
    let arr = [0, 1]

    return function fib() {
        if (arr.length <= 2) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 1 - 1])
            return arr[1]
        }
        let result = arr[arr.length - 1] + arr[arr.length - 1 - 1]

        arr.push(result)

        return arr[arr.length - 1 - 1]

    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13



function getFibonator() {
    let firstNum = 0
    let secondNum = 1

    return function fib() {
        let result = firstNum + secondNum
        firstNum = secondNum
        secondNum = result
        return firstNum

    }
}
