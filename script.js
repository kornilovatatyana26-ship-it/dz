const wishText = document.querySelector("#wishText");
const wishButton = document.querySelector("#wishButton");

wishButton.addEventListener("click", () => {
  wishText.textContent = "Улыбнись: сегодня точно будет что-то хорошее.";
});
