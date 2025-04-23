function towns(arr){

   let myObj = {}

    for(let i = 0 ; i < arr.length ; i++){

        let [nameTown, latitude, longitude] = arr[i].split(" | ")

        myObj = {
             town: nameTown,
             latitude: Number(latitude).toFixed(2),
             longitude: Number(longitude).toFixed(2)

        }
        console.log(myObj);
}
      
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])