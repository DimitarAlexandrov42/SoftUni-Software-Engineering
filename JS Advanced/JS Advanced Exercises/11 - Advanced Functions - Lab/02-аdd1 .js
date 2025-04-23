function solution(num) {

    let currNum = num

    return function add5(added) {
        let newNumb
        return newNumb = currNum + added

    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

