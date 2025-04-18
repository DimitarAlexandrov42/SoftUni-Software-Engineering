function solve() {
  let colorRef = document.querySelector("select#colors")
  let modelRef = document.querySelector("select#motorcycles")
  let dateRef = document.querySelector("input#datetime")
  let fullNameRef = document.querySelector("input#full-name")
  let emailRef = document.querySelector("input#email")

  let testRideBtn = document.querySelector("button#test-ride-btn")

  let previewListRef = document.querySelector("ul#preview-list")

  let completeListRef = document.querySelector("ul#complete-list")




  let li = document.createElement("li")
  let article = document.createElement("article")
  let pColor = document.createElement("p")
  let pModel = document.createElement("p")
  let pNames = document.createElement("p")
  let pEmail = document.createElement("p")
  let pDate = document.createElement("p")
  let divContainer = document.createElement("div")



  let editBtn = document.createElement("button")
  editBtn.textContent = "Edit"
  editBtn.className = "edit-btn"

  let nextBtn = document.createElement("button")
  nextBtn.textContent = "Next"
  nextBtn.className = "next-btn"

  let completeBtn = document.createElement("button")
  completeBtn.textContent = "Complete"
  completeBtn.className = "complete-btn"

  completeBtn.addEventListener("click", completeFunc)


  let confirmBtn = document.createElement("button")
  confirmBtn.textContent = "Your Test Ride is Confirmed"
  confirmBtn.className = "confirm-btn"




  testRideBtn.addEventListener("click", testRideFunc)
  editBtn.addEventListener("click", editFunc)
  nextBtn.addEventListener("click", nextFunc)
  confirmBtn.addEventListener("click", confirmFunc)


  function testRideFunc() {

    if (!colorRef.value || !modelRef.value || !dateRef.value || !fullNameRef.value || !emailRef.value) {
      return
    }




    pColor.textContent = `Color: ${colorRef.value}`
    pModel.textContent = `Model: ${modelRef.value}`
    pNames.textContent = `For: ${fullNameRef.value}`
    pEmail.textContent = `Contact: ${emailRef.value}`
    pDate.textContent = `Test Ride On: ${dateRef.value}`

    divContainer.className = "btn-container"





    article.appendChild(pColor)
    article.appendChild(pModel)
    article.appendChild(pNames)
    article.appendChild(pEmail)
    article.appendChild(pDate)

    divContainer.appendChild(editBtn)
    divContainer.appendChild(nextBtn)

    li.appendChild(article)
    li.appendChild(divContainer)

    previewListRef.appendChild(li)

    colorRef.value = ""
    modelRef.value = ""
    fullNameRef.value = ""
    emailRef.value = ""
    dateRef.value = ""

    testRideBtn.disabled = true

  }


  function editFunc() {



    colorRef.value = pColor.textContent.replace("Color: ", "")
    modelRef.value = pModel.textContent.replace("Model: ", "")
    fullNameRef.value = pNames.textContent.replace("For: ", "")
    emailRef.value = pEmail.textContent.replace("Contact: ", "")
    dateRef.value = pDate.textContent.replace("Test Ride On: ", "")



    testRideBtn.disabled = false
    previewListRef.innerHTML = ""





  }

  function nextFunc() {
    previewListRef.innerHTML = ""
  
    let currLi = document.createElement("li")


    article.appendChild(pColor)
    article.appendChild(pModel)
    article.appendChild(pNames)
    article.appendChild(pEmail)
    article.appendChild(pDate)

    article.appendChild(completeBtn)

    currLi.appendChild(article)

    completeListRef.appendChild(currLi)
  }

  function completeFunc() {
       completeListRef.innerHTML = ""

let dataViewRef = document.querySelector("div.data-view")

    dataViewRef.appendChild(confirmBtn)



  }

  function confirmFunc() {
     location.reload()
  }


}