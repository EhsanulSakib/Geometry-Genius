const triangleBtn = document.getElementById("triangleBtn");

triangleBtn.addEventListener("click", function () {
  const triangleBase = document.getElementById("triangleBase").value;
  const triangleHeight = document.getElementById("triangleHeight").value;
  const triangleResult = document.getElementById("triangleResult");

  console.log(triangleBase + " " + triangleHeight);

  const triangleArea =
    0.5 * parseFloat(triangleBase) * parseFloat(triangleHeight);
  console.log(triangleArea);

  triangleResult.innerText = triangleArea;
});
