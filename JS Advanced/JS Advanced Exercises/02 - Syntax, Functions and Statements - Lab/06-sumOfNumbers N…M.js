function sumOfNumbersNToM(n, m) {

    let num1 = Number(n)
    let num2 = Number(m)

    let result = 0

    for (let i = num1; i <= num2; i++) {
         result+=i
    }

    console.log(result);
}
sumOfNumbersNToM('-8', '20')