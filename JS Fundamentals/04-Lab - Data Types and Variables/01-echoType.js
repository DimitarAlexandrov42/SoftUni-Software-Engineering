function echoType(input) {

    if (typeof(input) === "number" || typeof(input) === "string") {
        console.log(typeof(input))
        console.log(input)

    } else {
        console.log("object")
        console.log("Parameter is not suitable for printing")
       
    }

}
echoType('Hello, JavaScript!')