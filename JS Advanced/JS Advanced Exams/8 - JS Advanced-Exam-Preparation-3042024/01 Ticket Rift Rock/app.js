window.addEventListener("load", solve);

function solve() {

    let numberOfTicketsRef = document.getElementById('num-tickets')
    let seatingPreferenceRef = document.getElementById('seating-preference')
    let fullNameRef = document.getElementById('full-name')
    let emailRef = document.getElementById('email')
    let phoneNumberRef = document.getElementById('phone-number')

    let purchaseButtonRef = document.querySelector('button#purchase-btn')

    let ticketPreviewRef = document.getElementById('ticket-preview')
    let ticketPurchaseRef = document.getElementById('ticket-purchase')

    let bottomContent = document.querySelector('div.bottom-content')

    let buyBtn = document.createElement('button')
    let backBtn = document.createElement('button')

    purchaseButtonRef.addEventListener('click', (e) => {

        if (!numberOfTicketsRef.value || !seatingPreferenceRef.value || !fullNameRef.value || !emailRef.value || !phoneNumberRef.value) {
            return
        }

        purchaseButtonRef.disabled = true

        let li = document.createElement('li')
        li.className = 'ticket-purchase'

        let article = document.createElement('article')

        let p1 = document.createElement('p')
        p1.textContent = `Count: ${numberOfTicketsRef.value}`

        let p2 = document.createElement('p')
        p2.textContent = `Preference: ${seatingPreferenceRef.value}`

        let p3 = document.createElement('p')
        p3.textContent = `To: ${fullNameRef.value}`

        let p4 = document.createElement('p')
        p4.textContent = `Email: ${emailRef.value}`

        let p5 = document.createElement('p')
        p5.textContent = `Phone Number: ${phoneNumberRef.value}`

        article.appendChild(p1)
        article.appendChild(p2)
        article.appendChild(p3)
        article.appendChild(p4)
        article.appendChild(p5)

        li.appendChild(article)

        //Option Buttons

        let div = document.createElement('div')
        div.className = 'btn-container'

        let button1 = document.createElement('button')
        button1.textContent = 'Edit'
        button1.className = 'edit-btn'

        let button2 = document.createElement('button')
        button2.textContent = 'Next'
        button2.className = 'next-btn'

        div.appendChild(button1)
        div.appendChild(button2)

        li.appendChild(div)

        ticketPreviewRef.appendChild(li)

        numberOfTicketsRef.value = ''
        seatingPreferenceRef.value = ''
        fullNameRef.value = ''
        emailRef.value = ''
        phoneNumberRef.value = ''

        button1.addEventListener('click', () => {

            numberOfTicketsRef.value = p1.textContent.split('Count: ')[1]
            seatingPreferenceRef.value = p2.textContent.split('Preference: ')[1]
            fullNameRef.value = p3.textContent.split('To: ')[1]
            emailRef.value = p4.textContent.split('Email: ')[1]
            phoneNumberRef.value = p5.textContent.split('Phone Number: ')[1]

            ticketPreviewRef.innerHTML = ''
            purchaseButtonRef.disabled = false
        })

        button2.addEventListener('click', () => {
            ticketPreviewRef.innerHTML = ''
            let li1 = document.createElement('li')
            li1.className = 'ticket-purchase'

            buyBtn.className = 'buy-btn'
            buyBtn.textContent = 'Buy'

            article.appendChild(buyBtn)
            li1.appendChild(article)

            ticketPurchaseRef.appendChild(li1)

        })

        buyBtn.addEventListener('click', () => {

            let h2 = document.createElement('h2')
            h2.textContent = 'Thank you for your purchase!'

            backBtn.textContent = 'Back'

            bottomContent.appendChild(h2)
            bottomContent.appendChild(backBtn)

            ticketPurchaseRef.innerHTML = ''
        })

        backBtn.addEventListener('click', () => {
            location.reload()
        })
    })
}


