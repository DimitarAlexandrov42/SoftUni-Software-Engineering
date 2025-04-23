function create(words) {

   let input = document.getElementById('content')

   for (let i = 0; i < words.length; i++) {
      let currDiv = document.createElement('div')
      currDiv.addEventListener('click', show)

      let currPara = document.createElement('p')
      currPara.style.display = 'none'
      currPara.textContent = words[i]

      currDiv.appendChild(currPara)
      input.appendChild(currDiv)
   }

   function show(ev) {
      
     ev.currentTarget.children[0].style.display = ''
   }


}