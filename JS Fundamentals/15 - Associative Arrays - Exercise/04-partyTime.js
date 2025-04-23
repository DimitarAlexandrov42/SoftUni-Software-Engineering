function partyTime(arr){

    let vipList = []
    let regularList = []

    let person = arr.shift()

    while(person !== 'PARTY'){
        
        let isVip = isNaN(person[0])

        if(!isVip){
           vipList.push(person)
        }else{
        regularList.push(person)
        }
        person = arr.shift()
    }
    
     let allGuests = vipList.concat(regularList)
     
     for (const guest of arr) {
        allGuests.splice(allGuests.indexOf(guest),1)
      }
      console.log(allGuests.length);
       
      for (const iterator of allGuests) {
        console.log(iterator);
      }
}
partyTime([
    '7IK9Yo0h', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc'
  ])