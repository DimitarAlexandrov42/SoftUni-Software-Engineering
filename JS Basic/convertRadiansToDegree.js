function radiansToDegree(input) {
    let radians = Number(input[0])
    let degree = radians * 180 / Math.PI
    console.log(degree)
}
radiansToDegree(["6.2832"])