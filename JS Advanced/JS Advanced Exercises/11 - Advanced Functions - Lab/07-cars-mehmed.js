function cars(arr) {
    let objs = {};

    for (const data of arr) {
        const [command, name, ...tokens] = data.split(' ');

        if (command === 'create') {
            if (tokens[0] === 'inherit') {
                let parentName = tokens[1];
                objs[name] = Object.create(objs[parentName]);
            }
            else {
                objs[name] = {};
            }
        }

        else if (command === 'set') {
            let key = tokens[0];
            let value = tokens[1];
            objs[name][key] = value;
        }

        else if (command === 'print') {
            let properties = [];

            function collectProperties(obj) {

                //  console.log(obj);
                for (const key in obj) {
                    properties.push(`${key}:${obj[key]}`);
                }
                console.log(properties.join(","));
                // let parentName = Object.getPrototypeOf(obj);
                // if (parentName && objs[parentName]) {
                //     collectProperties(objs[parentName]);
                // }
            }
            ;
            collectProperties(objs[name]);
            // console.log(properties.join(','));
        }

    }
    
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])