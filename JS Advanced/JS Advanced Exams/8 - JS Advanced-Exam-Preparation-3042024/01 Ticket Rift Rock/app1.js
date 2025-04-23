window.addEventListener("load", solve);

function solve() {

    let numberOfTickets = document.getElementById("num-tickets")
    let seatingPreference = document.getElementById("seating-preference")
    let fullName = document.getElementById("full-name")
    let email = document.getElementById("email")
    let phoneNumber = document.getElementById("phone-number")

    let purchaseTicketsButton = document.querySelector("button#purchase-btn")

    let ticketsPreviewField = document.getElementById("ticket-preview")
    let ticketsPurchaseField = document.getElementById("ticket-purchase")

    let bottomField = document.querySelector("div.bottom-content")

    let buyBtn = document.createElement("button")
    let backBtn = document.createElement("button")


    purchaseTicketsButton.addEventListener("click", purchaseFunc)

    function purchaseFunc() {
        if (!numberOfTickets.value || !fullName.value || !email.value || !phoneNumber.value || !seatingPreference.value) {
            return
        }

        purchaseTicketsButton.disabled = true

        let li = document.createElement("li")
        li.className = "ticket-purchase"
        let article = document.createElement("article")
        let p = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")

        p.textContent = `Count: ${numberOfTickets.value}`
        p2.textContent = `Preference: ${seatingPreference.value}`
        p3.textContent = `To: ${fullName.value}`
        p4.textContent = `Email: ${email.value}`
        p5.textContent = `Phone Number: ${phoneNumber.value}`

        article.appendChild(p)
        article.appendChild(p2)
        article.appendChild(p3)
        article.appendChild(p4)
        article.appendChild(p5)
        li.appendChild(article)

        let div = document.createElement("div")
        div.className = "btn-container"

        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.className = 'edit-btn'

        let nextBtn = document.createElement("button")
        nextBtn.textContent = "Next"
        nextBtn.className = 'next-btn'


        div.appendChild(editBtn)
        div.appendChild(nextBtn)

        li.appendChild(div)

        ticketsPreviewField.appendChild(li)

        numberOfTickets.value = ""
        seatingPreference = ""
        fullName.value = ""
        email.value = ""
        phoneNumber.value = ""



        editBtn.addEventListener("click", (e) => {

            

            numberOfTickets.value = p1.textContent.split('Count: ')[1]
            seatingPreference.value = p2.textContent.split('Preference: ')[1]
            fullName.value = p3.textContent.split('To: ')[1]
            email.value = p4.textContent.split('Email: ')[1]
            phoneNumber.value = p5.textContent.split('Phone Number: ')[1]

            ticketsPreviewField.innerHTML = ""
            purchaseTicketsButton.disabled = false

        })

        nextBtn.addEventListener("click", () => {
            ticketsPreviewField.innerHTML = ""
            let li = document.createElement("li")
            li.className = "ticket-purchase"


            buyBtn.textContent = "Buy"
            buyBtn.className = "buy-btn"

            article.appendChild(buyBtn)
            li.appendChild(article)
            ticketsPurchaseField.appendChild(li)


            buyBtn.addEventListener("click", () => {
            
                let h2 = document.createElement("h2")
                h2.textContent = "Thank you for your purchase!"


                backBtn.textContent = "Back"

                bottomField.appendChild(h2)
                bottomField.appendChild(backBtn)

                    ticketsPurchaseField.innerHTML = ""

                backBtn.addEventListener("click", () => {


                    location.reload()

                })
            })
        })
    }
}

