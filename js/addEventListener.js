
let eventBtn = document.getElementById("h-btn");
let empty = document.getElementById("empty");
let emptyText = document.getElementById("empty-text");


// eventBtn.addEventListener("click", function eventBtnClick(){
//   alert("hey there");
//   console.log("clicked")
// });


// eventBtn.addEventListener("click", eventBtnClick);
// function eventBtnClick(){
//   alert("hey there");
//   console.log("clicked")
// }




// eventBtn.addEventListener("click", function mouseClicked(){
//   empty.innerHTML +=  `<p>Mouse clicked</p><br>`
// });
// eventBtn.addEventListener("mouseover", function mouseOverF(){
//   empty.innerHTML += `<p>Mouse in</p><br>`
// });

// eventBtn.addEventListener("mouseout", function mouseOutF(){
//   empty.innerHTML += `<p>Mouse out</p><br>`
// });


emptyText.addEventListener("mouseover", randomNumber);
function randomNumber(){
  emptyText.innerHTML = Math.random() * 100;
}

function removeEventRmv(){
  emptyText.removeEventListener("mouseover", randomNumber);
}












