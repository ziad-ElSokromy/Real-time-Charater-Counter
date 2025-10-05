const inputText = document.getElementById("textarea");
const totalElem = document.getElementById("total-counter");
const remainingElem = document.getElementById("remaining-counter");

inputText.onkeyup = () => {
  const total = inputText.value.length;
  const remaining = 50 - total;
  counter(total, remaining);
  totalElem.innerText = total;
  remainingElem.innerText = remaining;
};

const counter = (total, remaining) => (total, remaining);
