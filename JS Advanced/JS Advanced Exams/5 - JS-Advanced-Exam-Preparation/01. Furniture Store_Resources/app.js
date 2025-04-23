window.addEventListener('load', solve);

function solve(e) {
    let addButtonElement = document.getElementById('add')
    let modelInputElement = document.getElementById("model")
    let yearInputElement = document.getElementById("year")
    let descriptionInputElement = document.getElementById("description")
    let priceInputElement = document.getElementById("price")
    let furnitureListElement = document.getElementById("furniture-list")
    let totalPriceElement = document.querySelector(".total-price")

    addButtonElement.addEventListener("click", (e) => {
    
        let model = modelInputElement.value
        let description = descriptionInputElement.value
        let year = Number(yearInputElement.value)
        let price = Number(priceInputElement.value)

        if (!model || !description) {
            return
        }
        if (year <= 0 || price <= 0) {
            return
        }

        let rowElement = document.createElement("tr")
        let modelCellElement = document.createElement("td")
        let priceCellElement = document.createElement("td")
        let actionCellElement = document.createElement("td")
        let infoButtonElement = document.createElement("button")
        let buyButtonElement = document.createElement("button")
        let contentRowElement = document.createElement("tr")
        let yearContentElement = document.createElement("td")
        let descriptionContentElement = document.createElement("td")

        modelCellElement.textContent = model
        priceCellElement.textContent = price.toFixed(2)

        infoButtonElement.textContent = "More Info"
        infoButtonElement.classList.add("moreBtn")

        infoButtonElement.addEventListener("click", (e) => {
            if (e.currentTarget.textContent == "More Info") {
                e.currentTarget.textContent = "Less Info"
                contentRowElement.style.display = "contents"
            } else {
                e.currentTarget.textContent = "More Info"
                contentRowElement.style.display = "none"

            }
        })
        buyButtonElement.textContent = "Buy it"
        buyButtonElement.classList.add("buyBtn")
        buyButtonElement.addEventListener("click", (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent)
            let totalPrice = currentTotalPrice + price
            totalPriceElement.textContent = totalPrice.toFixed(2)

            rowElement.remove()
            contentRowElement.remove()

        })
        actionCellElement.appendChild(infoButtonElement)
        actionCellElement.appendChild(buyButtonElement)

        rowElement.classList.add("info")

        rowElement.appendChild(modelCellElement)
        rowElement.appendChild(priceCellElement)
        rowElement.appendChild(actionCellElement)

        yearContentElement.textContent = `Year: ${year}`
        descriptionContentElement.setAttribute("colspan", 3)
        descriptionContentElement.textContent = `Description: ${description}`

        contentRowElement.classList.add('hide')
        contentRowElement.style.display = 'none'

        contentRowElement.appendChild(yearContentElement)
        contentRowElement.appendChild(descriptionContentElement)

        furnitureListElement.appendChild(rowElement)
        furnitureListElement.appendChild(contentRowElement)
    })
}






