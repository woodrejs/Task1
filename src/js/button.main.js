import { isActive as uniqueNumbers } from "./toggler.main";
import { openModal } from "./modal.handlers";
import gsap from "gsap";
//nodes
const button = document.getElementById("mainBtn");
const evenCol = document.getElementById("evenCol");
const oddCol = document.getElementById("oddCol");
//vars
const min = 1;
const max = 100;
const qnt = 20;

//listener
button.addEventListener("click", () => {
  const randomNumbers = uniqueNumbers
    ? getRandomUniqueNumbers(qnt, min, max)
    : getRandomNumbers(qnt, min, max);

  const sortedNumbers = randomNumbers.sort((a, b) => a > b);
  const { even, odd } = separateEvenOddNumbers(sortedNumbers);

  displayNumbers(evenCol, even);
  displayNumbers(oddCol, odd);

  openModal();
});
button.addEventListener("mouseenter", () => {
  gsap.to(button, { duration: 0.3, opacity: 0.8 });
});
button.addEventListener("mouseout", () => {
  gsap.to(button, { duration: 0.3, opacity: 1 });
});

//functions
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomNumbers(qnt, min, max) {
  const tmpArr = [];
  for (let index = 0; index < qnt; index++) {
    tmpArr.push(getRndInteger(min, max));
  }
  return tmpArr;
}
function getUniqueNumber(counter, min, max) {
  const randomNumber = getRndInteger(min, max);

  if (!counter[randomNumber]) return randomNumber;

  return getUniqueNumber(counter, min, max);
}
function getRandomUniqueNumbers(qnt, min, max) {
  const areUniqueNumbersAvaible = max - min > qnt;

  if (!areUniqueNumbersAvaible) return [];

  const counter = {};
  for (let index = 0; index < qnt; index++) {
    const uniqueNumber = getUniqueNumber(counter, min, max);
    counter[uniqueNumber] = true;
  }

  return Object.keys(counter);
}
function separateEvenOddNumbers(arr) {
  const even = [];
  const odd = [];

  arr.forEach((el) => {
    const isOdd = el % 2;
    isOdd ? odd.push(el) : even.push(el);
  });

  return { even, odd };
}
function displayNumbers(node, arr) {
  arr.forEach((el) => {
    node.innerHTML += `<div class="modal__table__cell">${el}</div>`;
  });
}
