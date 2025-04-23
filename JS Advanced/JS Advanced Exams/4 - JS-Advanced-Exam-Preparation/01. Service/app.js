window.addEventListener("load", solve);


function solve() {
    let descriptionField = document.getElementById("description")
    let clientNameField = document.getElementById("client-name")
    let clientPhoneField = document.getElementById("client-phone")
    let typeProduct = document.getElementById("type-product")



    let sendFormButton = document.querySelector("button[type=submit]")


    sendFormButton.addEventListener("click", sendForm)

    function sendForm(e) {
        e.preventDefault()
        if (!descriptionField.value || !clientNameField.value || ) {
            return
        }

        let descriptionRef = descriptionField.value
        let clientNameRef = clientNameField.value
        let clientPhoneRef = clientPhoneField.value
        let typeProductRef = typeProduct.value

        descriptionField.value = ""
        clientNameField.value = ""
        clientPhoneField.value = ""


        let receivedOrdersSection = document.getElementById("received-orders")
        let div = document.createElement("div")
        div.className = "container"
        div.innerHTML = `
        <h2>Product type for repair: ${typeProductRef}</h2>
        <h3>Client information: ${clientNameRef}, ${clientPhoneRef}</h3>
        <h4>Description of the problem: ${descriptionRef}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>
        `
        receivedOrdersSection.appendChild(div)


        let startBtn = document.querySelectorAll("button[class=start-btn]")
        for (const x of startBtn) {
            x.addEventListener("click", startRepair)
        }

        let finishBtn = document.querySelectorAll("button[class=finish-btn]")


        let completedOrders = document.getElementById("completed-orders")


        function startRepair(e) {
         
            e.target.disabled = true
            e.target.parentElement.children[4].disabled = false

            for (const x of finishBtn) {
                x.addEventListener("click", FinishRepair)
            }
        }

        function FinishRepair(e) {

            let div = document.createElement("div")
            div.className = "container"
            div.innerHTML = `
            <h2>Product type for repair: ${typeProductRef}</h2>
            <h3>Client information: ${clientNameRef}, ${clientPhoneRef}</h3>
            <h4>Description of the problem: ${descriptionRef}</h4>
    `
            completedOrders.appendChild(div)


            e.target.parentElement.remove(div)
            document.querySelector("button.clear-btn").addEventListener("click", clear)
        }

        function clear(e) {
            let div = document.querySelector("section#completed-orders div")
            if (div) {
                div.remove()
            }

        }

    }


}
