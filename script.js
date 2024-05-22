const container = document.querySelector("#container");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.classList.add("clicked");
  }
});

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)