const counter = document.querySelector("#counter");

let count = 0;
const intervalId = setInterval(() => {
  count++;
  counter.textContent = count;
  if (count >= 5) {
    console.log("종료!");
    clearInterval(intervalId);
  }
}, 1000);