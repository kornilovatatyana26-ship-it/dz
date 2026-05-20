const statusText = document.querySelector("#statusText");
const statusButton = document.querySelector("#statusButton");
const progressCard = document.querySelector(".progress-card");

statusButton.addEventListener("click", () => {
  statusText.textContent = "Готово: проект можно отправлять на GitHub.";
  statusButton.textContent = "Готово";
  progressCard.classList.add("is-complete");
});
