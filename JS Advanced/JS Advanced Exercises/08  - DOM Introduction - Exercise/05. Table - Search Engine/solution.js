function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr')
   // let rows = Array.from(document.querySelectorAll('tbody tr')) Ако има проблем се parse-ва
   let input = document.getElementById('searchField')

   function onClick() {

      for (const row of rows) {
         row.classList.remove('select')
         if (input.value != "" && row.innerHTML.includes(input.value)) {
            row.className = 'select'
         }
      }
      input.value = ""
   }
}
document.createDocumentFragment