function roadRadar(speed, parameter) {

    let location = parameter

    switch (location) {
        case 'residential':
            let residentialLimit = 20
            if (speed <= residentialLimit) {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            }
            else if (speed > 20 && speed <= 40) {
                let speeding = speed - residentialLimit
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${residentialLimit} - speeding`);
            } else if (40 < speed && speed <= 60) {
                let excessive = speed - residentialLimit
                console.log(`The speed is ${excessive} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`);
            } else {
                let reckless = speed - residentialLimit
                console.log(`The speed is ${reckless} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`);
            }

            ; break
        case 'city':
            let cityLimit = 50

            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            }
            else if (speed > 50 && speed <= 70) {
                let speeding = speed - cityLimit
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${cityLimit} - speeding`);
            } else if (70 < speed && speed <= 90) {
                let excessive = speed - cityLimit
                console.log(`The speed is ${excessive} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`);
            } else {
                let reckless = speed - cityLimit
                console.log(`The speed is ${reckless} km/h faster than the allowed speed of ${cityLimit} - reckless driving`);
            }; break
        case 'interstate':
            let intersateLimit = 90
            if (speed <= intersateLimit) {
                console.log(`Driving ${speed} km/h in a ${intersateLimit} zone`);
            } else if (speed >= 90 && speed <= 110) {
                let speeding = speed - intersateLimit
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${intersateLimit} - speeding`);
            } else if (110 < speed && speed <= 130) {
                let excessive = speed - intersateLimit
                console.log(`The speed is ${excessive} km/h faster than the allowed speed of ${intersateLimit} - excessive speeding`);
            } else {
                let reckless = speed - intersateLimit
                console.log(`The speed is ${reckless} km/h faster than the allowed speed of ${intersateLimit} - reckless driving`);
            }; break
        case 'motorway':
            let motorwayLimit = 130
            if (speed <= motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            } else if (speed >= 130 && speed <= 150) {
                let speeding = speed - motorwayLimit
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${motorwayLimit} - speeding`);
            } else if (150 < speed && speed <= 170) {
                let excessive = speed - intersateLimit
                console.log(`The speed is ${excessive} km/h faster than the allowed speed of ${motorwayLimit} - excessive speeding`);
            } else {
                let reckless = speed - motorwayLimit
                console.log(`The speed is ${reckless} km/h faster than the allowed speed of ${motorwayLimit} - reckless driving`);
            }; break
    }
}
roadRadar(40, 'city')