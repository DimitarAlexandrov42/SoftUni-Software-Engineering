

export const notificationMsg = (message) => {
  const container = document.querySelector("#errorBox");
  const span = document.querySelector(".msg");

  span.textContent = message;
  container.style.display = 'inline-block'

  setTimeout(() => {
    container.style.display = "none";
  }, 3000);
};
