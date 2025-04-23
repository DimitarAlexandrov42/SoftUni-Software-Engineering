function convertonToJSON(name, lastName, hairColor) {

    let myObj = {
        name,
        lastName,
        hairColor
    }
    let myObjToJSON = JSON.stringify(myObj)
    console.log(myObjToJSON);
}
convertonToJSON('George', 'Jones',
'Brown' )