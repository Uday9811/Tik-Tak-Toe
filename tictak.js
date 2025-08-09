let Boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turn0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
Boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      box.classList.add("color1");
      turn0 = false;
    } else {
      box.innerText = "X";
      box.classList.add("color2");
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of Boxes) {
    box.disabled = true;   
  }
};
const enableBoxes = () => {
  for (let box of Boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("color1","color2");
  }
};
const showWinner = (Winner) => {
  msg.innerText = `Congratulation, Winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = Boxes[pattern[0]].innerText;
    let pos2Val = Boxes[pattern[1]].innerText;
    let pos3Val = Boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
