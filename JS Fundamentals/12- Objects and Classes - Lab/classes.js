function demo(){

   class Cars {
    constructor(model,price, color){
        this.model = model
        this.price = price
        this.color = color
        this.electric = true
    }
   }

   let myCar = new Cars("mercedes", "80 000", "white", "benzin")

   console.log(myCar);



}
demo()