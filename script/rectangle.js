const rectangleBtn = document.getElementById("rectangleBtn");

rectangleBtn.addEventListener("click", function () {
  const rectangleWidth = document.getElementById("rectangleWidth").value;
  const rectangleLength = document.getElementById("rectangleLength").value;
  const rectangleResult = document.getElementById("rectangleResult");

  const rectangleArea =
    parseFloat(rectangleWidth) * parseFloat(rectangleLength);

  rectangleResult.innerText = rectangleArea;

  const calculationHistory = document.getElementById("history");
  const newLi = document.createElement("li");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.innerText =
    "Rectangle: Width: " +
    rectangleWidth +
    " Length: " +
    rectangleLength +
    " Area: " +
    rectangleArea;

  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Remove";
  newLi.append(p);
  newLi.append(btn);

  calculationHistory.append(newLi);

  document.getElementById("rectangleWidth").value = "";
  document.getElementById("rectangleLength").value = "";

  btn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
