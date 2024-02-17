const pentagonBtn = document.getElementById("pentagonBtn");

pentagonBtn.addEventListener("click", function () {
  const pentagonPerimeter = document.getElementById("pentagonPerimeter").value;
  const pentagonApothem = document.getElementById("pentagonApothem").value;
  const pentagonResult = document.getElementById("pentagonResult");

  const pentagonArea =
    0.5 * parseFloat(pentagonPerimeter) * parseFloat(pentagonApothem);

  pentagonResult.innerText = pentagonArea;

  const calculationHistory = document.getElementById("history");
  const newLi = document.createElement("li");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.innerText =
    "pentagon: Perimeter: " +
    pentagonPerimeter +
    " Apothem: " +
    pentagonApothem +
    " Area: " +
    pentagonArea;

  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Remove";
  newLi.append(p);
  newLi.append(btn);

  calculationHistory.append(newLi);

  document.getElementById("pentagonPerimeter").value = "";
  document.getElementById("pentagonApothem").value = "";

  btn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
