const allButtons = document.querySelectorAll("button");
allButtons[0].addEventListener("click", (e) => {
  //   console.log(allButtons[0].value);
  if (allButtons[0].value == 0) {
    document.querySelector(".ageChecker").textContent =
      "Are you on Medicare or Medicaid?";
    allButtons[0].value++;
    console.log("hi");
  }
  console.log((document.querySelector(".ageChecker").style.display = "none"));
});
