
const authur = "Sourav";


function click(){
  console.log('hey')
}

let qrap = document.getElementsByClassName("qrap")[0];
let box = document.getElementsByClassName("box")[0];
// let box = document.createElement("div");

// qrap.appendChild(box);
// box.className = "box";

function omOver() {
  box.style.backgroundColor = "tomato"
}

function chngClr(){
  box.style.backgroundColor = "teal"
}

function rotateBox(){
  box.className = "rotate"
  console.log("hello")
}

function rightClicks(){
  box.style.backgroundColor = "#000"
}



