function storeProvision(stock, neededStock){

     let obj = {}

    for(let i = 0 ; i <stock.length ; i+=2){
        let product = stock[i]
        let quantity = stock[i+1]

          obj[product] = Number(quantity)
    }
    
    for (let l = 0; l < neededStock.length; l+=2) {
        let product = neededStock[l]
   

        if(!obj.hasOwnProperty(product)){
            obj[product] = 0
        }
         obj[product] += Number(neededStock[l+1])  
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }


}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', 
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 
    'Tomatoes', '70', 'Bananas', '30'])