const triangleBtn = document.getElementById("triangleBtn");

triangleBtn.addEventListener("click", function () {
  const triangleBase = document.getElementById("triangleBase").value;
  const triangleHeight = document.getElementById("triangleHeight").value;
  const triangleResult = document.getElementById("rectangleResult");

  const triangleArea =
    0.5 * parseFloat(triangleBase) * parseFloat(triangleHeight);

  triangleResult.innerText = triangleArea;

  const calculationHistory = document.getElementById("history");
  const newLi = document.createElement("li");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.innerText =
    "Triangle: Base: " +
    triangleBase +
    " Height: " +
    triangleHeight +
    " Area: " +
    triangleArea;

  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Remove";
  newLi.append(p);
  newLi.append(btn);

  calculationHistory.append(newLi);

  document.getElementById("triangleBase").value = "";
  document.getElementById("triangleHeight").value = "";

  btn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
