window.addEventListener('load', solve);

function solve() {

    let firstNameRef = document.querySelector("input#first-name")
    let lastNameRef = document.querySelector("input#last-name")
    let fromDateRef = document.querySelector("input#from-date")
    let toDateRef = document.querySelector("input#to-date")

    let nextBtnRef = document.querySelector("button#next-btn")

    let infoListRef = document.querySelector("ul.info-list")
    let confirmListRef = document.querySelector("ul.confirm-list")


    let editBtn = document.createElement('button')
    editBtn.className = "edit-btn"
    editBtn.textContent = `Edit`

    let continueBtn = document.createElement('button')
    continueBtn.className = "continue-btn"
    continueBtn.textContent = "Continue"

    let confirmBtn = document.createElement("button")
    confirmBtn.className = "confirm-btn"
    confirmBtn.textContent = "Confirm"

    let cancelBtn = document.createElement("button")
    cancelBtn.className = "cancel-btn"
    cancelBtn.textContent = "Cancel"

    let lastH1 = document.querySelector("h1#status")
    lastH1.addEventListener("click",reloadFunc)



    let article = document.createElement('article')

    let h3Names = document.createElement('h3')
    let pFrom = document.createElement('p')
    let pTo = document.createElement('p')

    nextBtnRef.addEventListener("click", nextFunc)
    editBtn.addEventListener("click", editFunc)
    continueBtn.addEventListener("click", continueFunc)
    confirmBtn.addEventListener("click", confirmFunc)
    cancelBtn.addEventListener("click", cancelFunc)


    function nextFunc(e) {
        e.preventDefault()



        if (!firstNameRef.value || !lastNameRef.value || !fromDateRef.value || !toDateRef.value || fromDateRef.value > toDateRef.value) {
            return
        }

        nextBtnRef.disabled = true

        let li = document.createElement('li')
        li.className = "vacation-content"




        h3Names.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`


        pFrom.textContent = `From date: ${fromDateRef.value}`


        pTo.textContent = `To date: ${toDateRef.value}`



        article.appendChild(h3Names)
        article.appendChild(pFrom)
        article.appendChild(pTo)

        li.appendChild(article)
        li.appendChild(editBtn)
        li.appendChild(continueBtn)

        infoListRef.appendChild(li)

        firstNameRef.value = ""
        lastNameRef.value = ""
        fromDateRef.value = ""
        toDateRef.value = ""

    }




    function editFunc() {

        firstNameRef.value = h3Names.textContent.replace("Name: ", "").split(" ")[0]
        lastNameRef.value = h3Names.textContent.replace("Name: ", "").split(" ")[1]
        fromDateRef.value = pFrom.textContent.replace("From date: ", "")
        toDateRef.value = pTo.textContent.replace("To date: ", "")

        infoListRef.innerHTML = ""
        nextBtnRef.disabled = false

        h3Names.textContent = ""
        pFrom.textContent = ""
        pTo.textContent = ""
    }

    function continueFunc() {


        let liC = document.createElement("li")
        liC.className = "vacation-content"







        liC.appendChild(article)
        liC.appendChild(confirmBtn)
        liC.appendChild(cancelBtn)

        confirmListRef.appendChild(liC)

        infoListRef.innerHTML = ""
    }

    function confirmFunc() {
        nextBtnRef.disabled = false
        confirmListRef.innerHTML = ""

        lastH1.textContent = "Vacation Requested"
        lastH1.className = "vacation-confirmed"

    }

    function cancelFunc() {
        nextBtnRef.disabled = false
        confirmListRef.innerHTML = ""


        lastH1.textContent = "Canceled Vacation"
        lastH1.className = "vacation-cancelled"


    }

    function reloadFunc(){
        location.reload()
    }






}




