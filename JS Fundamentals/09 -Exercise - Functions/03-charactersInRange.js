function characterInRange(a, b) {

    let start = Math.min(a.charCodeAt(), b.charCodeAt())
    let end = Math.max(a.charCodeAt(), b.charCodeAt())

    let output = ""

    for (let i = start + 1; i < end; i++) {
        let result = String.fromCharCode(i)
        output += " " + result
    }

    console.log(output);
}
characterInRange('C', '#')