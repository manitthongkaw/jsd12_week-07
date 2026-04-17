const clickerBtn = document.getElementById("clicker");
const countNumber = document.getElementById("countNumber");
let number = 0;
clickerBtn.addEventListener("click", () => {
  number += 1;
  countNumber.textContent = number;
  clickerBtn.style.transform = `rotate(${number}deg)`;
});

const auntNextDoorBtn = document.getElementById("clickerOptionAuntNextDoor");
auntNextDoorBtn.addEventListener("click", () => {
  auntNextDoorBtn.classList.toggle("active");
  const optionStatus = auntNextDoorBtn.querySelector("span")
  optionStatus.classList.toggle("hidden");
  
  if (!optionStatus.classList.contains("hidden")) {
    auntNextDoorIntervalId = setInterval(() => {
      number += 1;
      countNumber.textContent = number;
      clickerBtn.style.transform = `rotate(${number}deg)`;
    }, 333); 
  } else {
    clearInterval(auntNextDoorIntervalId);
  }
});

const AerobicsSocietyBtn = document.getElementById("clickerOptionAerobicsSociety");
AerobicsSocietyBtn.addEventListener("click", () => {
  AerobicsSocietyBtn.classList.toggle("active");
  const optionStatus = AerobicsSocietyBtn.querySelector("span")
  optionStatus.classList.toggle("hidden");
  
  if (!optionStatus.classList.contains("hidden")) {
    AerobicsSocietyIntervalId = setInterval(() => {
      number = Math.ceil(number * 1 + 1);
      countNumber.textContent = number;
      clickerBtn.style.transform = `rotate(${number}deg)`;
    }, 250); 
  } else {
    clearInterval(AerobicsSocietyIntervalId);
  }
});