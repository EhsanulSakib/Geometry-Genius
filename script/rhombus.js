const rhombusBtn = document.getElementById("rhombusBtn");

rhombusBtn.addEventListener("click", function () {
  const rhombusD1 = document.getElementById("rhombusD1").value;
  const rhombusD2 = document.getElementById("rhombusD2").value;
  const rhombusResult = document.getElementById("rhombusResult");

  const rhombusArea = 0.5 * parseFloat(rhombusD1) * parseFloat(rhombusD2);

  rhombusResult.innerText = rhombusArea;

  const calculationHistory = document.getElementById("history");
  const newLi = document.createElement("li");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.innerText =
    "Rhombus: D1: " + rhombusD1 + " D2: " + rhombusD2 + " Area: " + rhombusArea;

  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Remove";
  newLi.append(p);
  newLi.append(btn);

  calculationHistory.append(newLi);

  document.getElementById("rhombusD1").value = "";
  document.getElementById("rhombusD2").value = "";

  btn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
