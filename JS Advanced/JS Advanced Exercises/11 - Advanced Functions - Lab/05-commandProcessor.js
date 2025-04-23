function solution() {

    let internalString = ''

    return {
        append: (str) => internalString += str,
        print: () => console.log(internalString),
        removeStart: (n) => internalString = internalString.substring(n),
        removeEnd: (n) => internalString = internalString.substring(0, internalString.length - n),
     
    }

}
let firstZeroTest = solution()
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
