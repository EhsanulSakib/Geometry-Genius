const ellipseBtn = document.getElementById("ellipseBtn");

ellipseBtn.addEventListener("click", function () {
  const ellipsePerimeter = document.getElementById("ellipsePerimeter").value;
  const ellipseApothem = document.getElementById("ellipseApothem").value;
  const ellipseResult = document.getElementById("ellipseResult");

  const ellipseArea =
    Math.PI * parseFloat(ellipsePerimeter) * parseFloat(ellipseApothem);

  ellipseResult.innerText = ellipseArea.toFixed(2);

  const calculationHistory = document.getElementById("history");
  const newLi = document.createElement("li");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.innerText =
    "ellipse: Perimeter: " +
    ellipsePerimeter +
    " Apothem: " +
    ellipseApothem +
    " Area: " +
    ellipseArea.toFixed(2);

  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Remove";
  newLi.append(p);
  newLi.append(btn);

  calculationHistory.append(newLi);

  document.getElementById("ellipsePerimeter").value = "";
  document.getElementById("ellipseApothem").value = "";

  btn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
