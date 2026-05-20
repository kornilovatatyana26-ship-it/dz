const predictionButton = document.querySelector("#predictionButton");
const predictionText = document.querySelector("#predictionText");

const predictions = [
  "Сегодня будет повод улыбнуться.",
  "Тебя ждёт что-то тёплое и хорошее.",
  "День будет мягким, как лапки котика.",
  "Маленькая удача уже идёт к тебе.",
  "Сегодня точно получится сделать важный шаг."
];

predictionButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * predictions.length);
  predictionText.textContent = predictions[randomIndex];
  predictionText.classList.add("is-visible");
});
