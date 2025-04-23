function summerOutfit(input) {
    let degree = Number(input[0])
    let timeOfTheDay = input[1]


    if (10 <= degree && degree <= 18) {
        switch (timeOfTheDay) {
            case "Morning": console.log(`It's ${degree} degrees, get your ${"Sweatshirt"} and ${"Sneakers"}.`); break;

            case "Afternoon": console.log(`It's ${degree} degrees, get your ${"Shirt"} and ${"Moccasins"}.`); break;

            case "Evening": console.log(`It's ${degree} degrees, get your ${"Shirt"} and ${"Moccasins"}.`); break;
        }
    } else if (18 < degree && degree <= 24) {
        switch (timeOfTheDay) {
            case "Morning": console.log(`It's ${degree} degrees, get your ${"Shirt"} and ${"Moccasins"}.`); break;

            case "Afternoon": console.log(`It's ${degree} degrees, get your ${"T-Shirt"} and ${"Sandals"}.`); break;

            case "Evening": console.log(`It's ${degree} degrees, get your ${"Shirt"} and ${"Moccasins"}.`); break;
        }
    }
    else if (25 <= degree) {
        switch (timeOfTheDay) {
            case "Morning": console.log(`It's ${degree} degrees, get your ${"T-Shirt"} and ${"Sandals"}.`); break;

            case "Afternoon": console.log(`It's ${degree} degrees, get your ${"Swim Suit"} and ${"Barefoot"}.`); break;

            case "Evening": console.log(`It's ${degree} degrees, get your ${"Shirt"} and ${"Moccasins"}.`); break;
        }
    }

}

summerOutfit(["12",

    "Morning"])