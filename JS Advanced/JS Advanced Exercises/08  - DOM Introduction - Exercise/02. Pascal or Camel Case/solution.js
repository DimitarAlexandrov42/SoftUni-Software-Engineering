function solve() {
  let text = document.getElementById('text').value
  let namingConvertion = document.getElementById('naming-convention').value

  let result = document.getElementById('result')

  let camel = ''
  let pascal = ''
  let currText = text.split(' ')
  switch (namingConvertion) {
    case 'Camel Case':
    
      let i = 0
      for (const word of currText) {
        if (i === 0) {
          camel += word[0].toLowerCase() 
          camel += word.slice(1,word.length).toLowerCase()
        }else{
          camel += word[0].toUpperCase()
          camel += word.slice(1,word.length).toLowerCase()
        }
        i++
      }
      result.textContent = camel
         console.log(camel);
      ; break
    case 'Pascal Case': 

      for (const word of currText) {
     
          pascal += word[0].toUpperCase()
          pascal += word.slice(1,word.length).toLowerCase()
        
        
      }
      console.log(pascal);
      result.textContent = pascal
    ; break
    default: result.textContent = 'Error!'; break
  }
}

solve("SecOND EXamPLE", "Pascal Case")