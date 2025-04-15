const container = document.querySelector(".notification")
const msgContainer = document.querySelector(".msg")

export const notificationMsg = (msg) => {
    msgContainer.textContent = msg
    container.style.display = "inline-block"



    setTimeout(() => {
        container.style.display = "none"

    }, 3000)
}