function solve() {
    const ourButtons = document.querySelectorAll('button')

    const breadButton = ourButtons[0]
    breadButton.addEventListener('click', addBread)

    const milkButton = ourButtons[1]
    milkButton.addEventListener('click', addMilk)

    const tomatoesButton = ourButtons[2]
    tomatoesButton.addEventListener('click', addTomatoes)

    const checkOutButton = ourButtons[3]
    checkOutButton.addEventListener('click', checkOut)

    let allPrices = document.getElementsByClassName('product-line-price')

    const breadPrice = allPrices[0].textContent
    const milkPrice = allPrices[1].textContent
    const tomatoesPrice = allPrices[2].textContent

    let input = document.querySelector('textarea')
    input.value = ''

    let totalBreadPrice = 0
    let totalMilkPrice = 0
    let totalTomatoesPrice = 0
    let totalPrice = 0
    let currList = ""


    function addBread(ev) {
        totalBreadPrice += Number(breadPrice)
        input.value += `Added Bread for ${breadPrice} to the cart.\n`
        if (!currList.includes('Bread')) {
            currList += 'Bread, '
        }
    }
    function addMilk(ev) {
        totalMilkPrice += Number(milkPrice)
        input.value += `Added Milk for ${milkPrice} to the cart.\n`
        if (!currList.includes('Milk')) {
            currList += 'Milk, '
        }
    }
    function addTomatoes(ev) {
        totalTomatoesPrice += Number(tomatoesPrice)
        input.value += `Added Tomatoes for ${tomatoesPrice} to the cart.\n`
        if (!currList.includes('Tomatoes')) {
            currList += 'Tomatoes, '
        }
    }
    function checkOut(ev) {
        totalPrice += totalBreadPrice + totalMilkPrice + totalTomatoesPrice
        input.value = `You bought ${currList.substring(0, currList.length - 2)} for ${totalPrice.toFixed(2)}.`


       ourButtons.forEach(b => {
        b.disabled = true
       })

    }

}




// ================================================================================4

function solve() {
    let textArea = document.querySelector('body > div > textarea');
    let totalPrice = 0;
    let listOfUniqueThings = [];
    let addBtn = document.getElementsByClassName('add-product');
    let arrayAddBtn = Array.from(addBtn);

    for (let i = 0; i < arrayAddBtn.length; i++) {
        arrayAddBtn[i].addEventListener('click', function one() {
            let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
            let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
            if (!listOfUniqueThings.includes(name)) {
                listOfUniqueThings.push(name);
            }
            let result = `Added ${name} for ${price} to the cart.\n`;
            totalPrice += Number(price);
            textArea.value += result;
        });
    }
    let checkOut = document.querySelector('body > div > button');
    checkOut.addEventListener('click', function final() {
        let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
        textArea.value += finalSting;
        disableButtons();
    });

    function disableButtons() {
       let buttons = Array.from(document.querySelectorAll('button'));
       buttons.forEach(button => button.disabled = true);
    }
}