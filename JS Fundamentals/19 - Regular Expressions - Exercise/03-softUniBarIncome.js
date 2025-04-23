function softuniBarIncome(arr) {

  let pattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<item>\w+)>[^|%$.]*\|(?<count>\d+)\|[^|%$.0-9]*(?<price>[\d]+.?\d*)\$/g
  let match
  let result = 0

  for (const line of arr) {
    if (line === 'end of shift') {
      break
    }
    match = [...line.matchAll(pattern)]

        
        for (const el of match) {
          let price = Number(el.groups.count) * Number(el.groups.price)
          result+=price
         console.log(`${el.groups.name}: ${el.groups.item} - ${price.toFixed(2)}`);
         
        }
  }

  console.log(`Total income: ${result.toFixed(2)}`);
}
softuniBarIncome(['%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'])