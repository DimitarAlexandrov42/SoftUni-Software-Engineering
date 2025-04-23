function search() {
   let listElements = document.querySelectorAll(`ul#towns li`)
   let resultElement = document.getElementById('result')
   let searchText = document.getElementById('searchText').value
   let matches = 0

   for (const line of listElements) {
      line.style.fontWeight = "none"
      line.style.textDecoration = ""
   }

   for (let towns of listElements) {
      let text = towns.textContent
      console.log(text);

      if(text.match(searchText)){
         matches++
        towns.style.fontWeight = "bold"
        towns.style.textDecoration = "underline"
        
      };
   }

   resultElement.textContent = `${matches} matches found`
};






// {
// let citys = document.getElementsByTagName('li')
// let citysAsArray = Array.from(citys)

// let searched = document.getElementById('searchText')
// let toFind = searched.value

// let result = document.getElementById('result')

// let buttonElement = document.getElementsByTagName('button')

// let match = 0

// for (const city of citysAsArray) {
//    if (city.includes(toFind)) {
//  console.log(city)
//       match++
//    }
// }
// }

