
const authur = "Sourav";


let btn = document.getElementsByClassName("btn")[0];

// // adding eventListener functions
const btnOne = (e)=>{
  // console.log(e)
  // console.log(e.target)
  // console.log(e.type, e.clientX, e.clientY)
  alert("Hey, I am the 1st event eistener.")
}
const btnTwo = (e)=>{
    //  console.log(e)
    //  console.log(e.type, e.clientX, e.clientY)
//   console.log(e.target)
  alert("Hey, I am the 2nd event eistener.")
}

// adding eventListeners
btn.addEventListener("click", btnOne);
btn.addEventListener("click", btnTwo);


let toPromt = Number.parseInt(prompt("Enter 1 or 2"));

// adding conditions
if(toPromt == 1){
  // removing Event listner
  btn.removeEventListener("click", btnTwo);
} else {
  // removing Event listner
  btn.removeEventListener("click", btnOne);
}





