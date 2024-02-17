const perallelogramBtn = document.getElementById("perallelogramBtn");

perallelogramBtn.addEventListener("click", function () {
  const perallelogramBase = document.getElementById("perallelogramBase").value;
  const perallelogramHeight = document.getElementById(
    "perallelogramHeight"
  ).value;
  const perallelogramResult = document.getElementById("perallelogramResult");

  const perallelogramArea =
    0.5 * parseFloat(perallelogramBase) * parseFloat(perallelogramHeight);

  perallelogramResult.innerText = perallelogramArea;

  const calculationHistory = document.getElementById("history");
  const newLi = document.createElement("li");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.innerText =
    "Perallelogram: Base: " +
    perallelogramBase +
    " Height: " +
    perallelogramHeight +
    " Area: " +
    perallelogramArea;

  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Remove";
  newLi.append(p);
  newLi.append(btn);

  calculationHistory.append(newLi);

  document.getElementById("perallelogramBase").value = "";
  document.getElementById("perallelogramHeight").value = "";

  btn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
