function fruniture(arr) {

    let pattern = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>[0-9]+.?[0-9]+)!(?<quantity>[0-9]+)/
    let result = []
    let isFinish = false
    let totalSum = 0
    console.log('Bought furniture:')

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'Purchase') {
            isFinish = true
        }
        if (match = pattern.exec(arr[i])) {
            let match = pattern.exec(arr[i])
            result.push(match)
        } else {
            continue
        }

    }
    if (isFinish = true) {
        for (const iterator of result) {
            console.log(iterator[1])

            totalSum += (Number(iterator[2]) * Number(iterator[3]))
                
        }
        console.log(`Total money spend: ${totalSum.toFixed(2)}`);
    }
}
fruniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])