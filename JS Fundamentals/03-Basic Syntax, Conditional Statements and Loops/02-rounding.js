function rounding(number, precision) {

    if (precision > 15) {
        precision = 15
    }

    console.log(parseFloat(number.toFixed(precision)))


}
rounding(11.25000, 5)

