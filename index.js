const allButtons = document.querySelectorAll("button");
const ageChecker = document.querySelector(".ageChecker");
allButtons[0].addEventListener("click", (e) => {
  //   console.log(allButtons[0].value);
  if (allButtons[0].value == 0) {
    ageChecker.textContent = "Are you on Medicare or Medicaid?";
    allButtons[0].value++;
    allButtons[1].value++;
  } else {
    document.querySelectorAll("button").forEach((e) => {
      e.style.display = "none";
      ageChecker.textContent =
        "Unfortunately, we can't Qualify you at the moment";
      ageChecker.style.fontSize = "35px";
      ageChecker.style.fontWeight = "900";
    });
  }
});
allButtons[1].addEventListener("click", () => {
  ageChecker.textContent = "Unfortunately, we can't Qualify you at the moment";
  if (allButtons[1].value == 0) {
    ageChecker.textContent = "Are you on Medicare or Medicaid?";
    allButtons[0].value++;
    allButtons[1].value++;
  } else {
    document.querySelectorAll("button").forEach((e) => {
      e.style.display = "none";
      ageChecker.textContent =
        "Unfortunately, we can't Qualify you at the moment";
      ageChecker.style.fontSize = "35px";
      ageChecker.style.fontWeight = "900";
    });
    congratsElements();
  }
});
const congratsElements = () => {
  ageChecker.style.display = "none";
  const header = document.createElement("h1");
  const pTag = document.createElement("h3");
  const callNowBtn = document.createElement("button");
  const counterText = document.createElement("h3");
  const counterTimer = document.createElement("span");
  header.textContent = "CONGRATULATIONS, You're Eligible!";
  header.style.borderTop = "5px solid #00007c";
  pTag.innerHTML = `<h3 style="text-align: center">
  <span style="font-weight: 700">Last Step:</span>You must
  <span style="text-decoration: underline"> Call Now </span> to receive
  your <span style="color: red"> Free Credits </span> with Medical, Dental
  & Vision coverage.
</h3>
<h3 style="text-align: center">Call before enrollment closes!</h3>`;
  callNowBtn.textContent = "Call Now (888) 227-7051";
  counterText.textContent = `ACT FAST! Due to high call demand, your hotline will remain available for the next:`;
  counterText.appendChild(counterTimer);
  counterTimer.textContent = "02:00";
  counterTimer.style.color = "red";
  counterTimer.classList = ["timer"];
  counterText.style.fontWeight = "700";
  counterText.style.fontSize = "20px";
  document.querySelector(".buttons").appendChild(header);
  document.querySelector(".buttons").appendChild(pTag);
  document.querySelector(".buttons").appendChild(callNowBtn);
  document.querySelector(".buttons").appendChild(counterText);
  setInterval(start, 1000);

  // document.querySelector(".buttons").appendChild(counterTimer);
};
let timer = "";
let minute = 1;
let second = 60;
const start = () => {
  if (minute == 0 && second == 0) {
    clearInterval(start);
    return;
  }
  if (second == 0) {
    --minute;
    second = 60;
  }
  --second;
  timer = `${String(minute).padStart(2, "0")}:${String(second).padStart(
    2,
    "0"
  )}`;

  document.querySelector(".timer").textContent = timer;
};
