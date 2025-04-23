function makeADictianary(arr) {

     let obj = {}

     for (const objects of arr) {
          let newObject = JSON.parse(objects)
          
          for (const key of Object.keys(newObject)) {
               obj[key] = newObject[key]
          }

     }
     let sortedNewObject = Object.keys(obj).sort()

     for (const keys of sortedNewObject) {
          console.log(`Term: ${keys} => Definition: ${obj[keys]}`)
     }

}
makeADictianary([
     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)