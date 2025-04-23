function solve(e) {

    // e.preventDefault()

    let modelField = document.getElementById("model")
    let yearField = document.getElementById("year")
    let descriptionField = document.getElementById("description")
    let priceField = document.getElementById("price")
    let addButton = document.querySelector('button#add')
    let furnitureList = document.querySelector("tbody#furniture-list")





    addButton.addEventListener("click", addFurniture)

    function addFurniture(e) {

        // e.preventDefault()
        let modelRef = modelField.value
        let yearRef = yearField.value
        let descriptionRef = descriptionField.value
        let priceRef = priceField.value

        modelField.value = ""
        yearField.value = ""
        descriptionField.value = ""
        priceField.value = ""

        if (!modelRef || !yearRef || !descriptionRef || !priceRef) {
            return
        }
        if (yearRef <= 0 || priceRef <= 0) {
            return
        }


        let tr = document.createElement("tr")
        tr.className = "info"
        let td1 = document.createElement("td")
        td1.textContent = modelRef
        let td2 = document.createElement("td")
        td2.textContent = Number(priceRef).toFixed(2)

        let td3 = document.createElement("td")
        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        button1.className = "moreBtn"
        button2.className = "buyBtn"
        button1.textContent = "More Info"
        button2.textContent = "Buy it"
        td3.appendChild(button1)
        td3.appendChild(button2)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        let tr2 = document.createElement("tr")
        tr2.className = "hide"
        let td4 = document.createElement("td")
        td4.textContent = `Year: ${yearRef}`
        let td5 = document.createElement("td")
        td5.colSpan = "3"
        td5.textContent = `Description ${descriptionRef}`
        tr2.appendChild(td4)
        tr2.appendChild(td5)

        furnitureList.appendChild(tr)
        furnitureList.appendChild(tr2)

        // furnitureList.innerHTML =
        //     `<tr class="info">
        //         <td>${modelRef}</td>
        //         <td>${priceRef}</td>
        //         <td>
        //             <button class="moreBtn">More Info</button>
        //             <button class="butBtn">But it</button>
        //         </td>
        //     </tr>
        //     <tr class= "hide">
        //   <td>Year: ${yearRef}</td>
        //   <td colspan="3">Description: ${descriptionRef}</td>
        //     </tr>`
        let moreInfoBtn = document.querySelector("button.moreBtn")
        let buyBtn = document.querySelector("button.buyBtn")

        moreInfoBtn.addEventListener("click", moreInfo)
        buyBtn.addEventListener("click", buy)

    }
    function moreInfo() {
        // document.querySelector("tr.hide").style.display = "block"

        document.querySelector("tr.hide").style.display = "contents"
        document.querySelector("button.moreBtn").textContent = "Less Info"
        document.querySelector("button.moreBtn").addEventListener("click", lessInfo)
        document.querySelector("button.buyBtn").addEventListener("click", buy)
    }
    function lessInfo() {
        document.querySelector("tr.hide").style.display = "none"
        document.querySelector("button.moreBtn").textContent = "More Info"
        document.querySelector("button.moreBtn").addEventListener("click", moreInfo)
        document.querySelector("button.buyBtn").addEventListener("click", buy)
    }
    function buy() {
        let price = document.querySelectorAll("tr.info td")[1]
        let totalPrice = document.querySelector("td.total-price")
        totalPrice.textContent = price.textContent
        furnitureList.innerHTML = ""
    }
}