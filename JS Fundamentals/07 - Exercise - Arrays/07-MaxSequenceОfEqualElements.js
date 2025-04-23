function sequenceOfEqualElements(arr) {

    let sequance = 1
    let maxSequannce = 0
    let maxSequannceNum = 0

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let currNum = Number(arr[i])
            let prevNum = Number(arr[i - 1])
            if (currNum === prevNum) {
                sequance++
                
                if (sequance > maxSequannce) {
                   maxSequannceNum = currNum
                    maxSequannce = sequance
                }
            } else {
                sequance = 1
            }
        }
    }
       console.log(`${(maxSequannceNum+" ").repeat(maxSequannce)}`);
}
sequenceOfEqualElements([2, 1, 1, 1, 2, 3, 1, 3, 3])