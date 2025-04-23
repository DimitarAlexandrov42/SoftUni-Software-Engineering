function concatenateData(input){
     let firstName = input[0]
     let surName = input[1]
     let age = Number(input[2])
     let homeTown = input[3]

     console.log("You are " + firstName + " " + surName + ", a " + age + "-years old person from " + homeTown + ".")

}
concatenateData(["Ivan","Petrov","28","Sofia"])