function journey(input) {
    let budget = Number(input[0])
    let season = input[1]


    if (budget <= 100) {
        switch (season) {
            case "summer": budget *= 0.30; console.log(`Somewhere in Bulgaria
Camp - ${budget.toFixed(2)}`); break;
            case "winter": budget *= 0.70; console.log(`Somewhere in Bulgaria 
Hotel - ${budget.toFixed(2)}`); break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer": budget *= 0.40; console.log(`Somewhere in Balkans
Camp - ${budget.toFixed(2)}`); break;
            case "winter": budget *= 0.80; console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${budget.toFixed(2)}`); break;
        }
    } else if (budget > 1000) {
        switch (season) {
            case "summer": budget *= 0.90; console.log(`Somewhere in Europe
Hotel - ${budget.toFixed(2)}`); break;
            case "winter": budget *= 0.90; console.log(`Somewhere in Europe
Hotel - ${budget.toFixed(2)}`); break;

        }



    }
}
journey(["678.53", "summer"])