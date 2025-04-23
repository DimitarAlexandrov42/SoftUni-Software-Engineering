function vavation(peopleCount, groupType, day) {

    let totalPrice = 0

    if (groupType === "Students") {
        switch (day) {
            case "Friday": totalPrice = peopleCount * 8.45; break
            case "Saturday": totalPrice = peopleCount * 9.80; break
            case "Sunday": totalPrice = peopleCount * 10.46; break

        } if (peopleCount >= 30) {
            totalPrice *= 0.85
        }

    } else if (groupType === "Business") {
        if (peopleCount >= 100) {
            peopleCount -= 10
        }
        switch (day) {
            case "Friday": totalPrice = peopleCount * 10.90; break
            case "Saturday": totalPrice = peopleCount * 15.60; break
            case "Sunday": totalPrice = peopleCount * 16; break
        }

    } else if (groupType === "Regular") {
        switch (day) {
            case "Friday": totalPrice = peopleCount * 15; break
            case "Saturday": totalPrice = peopleCount * 20; break
            case "Sunday": totalPrice = peopleCount * 22.50; break
        }if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}