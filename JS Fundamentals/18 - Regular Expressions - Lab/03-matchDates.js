function matchDates(text) {

    let pattern = /(?<date>\d{2})([\/|\-|.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

    let result = []
    let match = pattern.exec(text)

    while (match) {
        result.push(match[0])
        match = pattern.exec(text)
    }
  
      for (const iterator of result) {
        console.log(`Day: ${iterator.substring(0,2)}, Month: ${iterator.substring(3,6)}, Year: ${iterator.substring(7)}`);
      }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']
)