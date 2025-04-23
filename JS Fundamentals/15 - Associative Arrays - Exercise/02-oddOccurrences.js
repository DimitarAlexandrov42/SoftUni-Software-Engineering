function oddOccurrences(string) {

    let arr = string.split(" ").map(x => x.toLowerCase())

    let obj = {}
    let obj2 = {}
    let arr2 = []

    for (const char of arr) {
        if (!obj.hasOwnProperty(char)) {
            obj[char] = 1
        } else {
            obj[char]++
        }
    }

    let entries = Object.entries(obj)

    for (const [key, value] of entries) {
        if (value % 2 === 1) {
            obj2[key] = value
        }
    }

    let sortedArr = Object.entries(obj2).sort((a, b) => b[1] - a[1])

    for (const [key, value] of sortedArr) {
        arr2.push(key)

    }
    console.log(arr2.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')