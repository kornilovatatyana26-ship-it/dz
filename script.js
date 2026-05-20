const wishText = document.querySelector("#wishText");
const wishButton = document.querySelector("#wishButton");

wishButton.addEventListener("click", () => {
  wishText.textContent = "Улыбнись: у тебя уже получается работать с Git!";
});
