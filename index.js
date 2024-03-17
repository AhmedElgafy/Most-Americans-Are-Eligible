const allButtons = document.querySelectorAll("button");
allButtons[0].addEventListener("click", (e) => {
  //   console.log(allButtons[0].value);
  if (allButtons[0].value == 0) {
    document.querySelector(".ageChecker").textContent =
      "Are you on Medicare or Medicaid?";
    allButtons[0].value++;
    console.log("hi");
  } else {
    document.querySelectorAll("button").forEach((e) => {
      e.style.display = "hidden";
      console.log(e.style.display);
    });
  }

  //   console.log(clickTimes);
});
