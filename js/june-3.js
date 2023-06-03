
let head = document.querySelector(".head");

head.style.background = "rgba(255 255 255 / 0.5)";
head.style.padding = "0.5rem 1.75rem";


head.childNodes[1].style.fontSize = "2.75rem"

head.parentNode.style.background = "rgba(50 250 255 / 0.45)"
head.parentNode.style.padding = "0.5rem";

// console.log(head.parentNode)



// Array.from(document.getElementsByClassName("qraper")).forEach((Element)=>{
//   Element.style.background = "red";
// })

Array.from(document.getElementsByClassName("qraper")).forEach((Element)=>{
  Element.style.margin = "1rem";
})





// matches() && contains() -  works with only id
let headTitle = document.getElementById("head-title")
let headTitleLName = document.getElementById("head-title-lname");

// console.log(headTitle)
// console.log(headTitle.matches(".header"));
// console.log(headTitle.matches("#header"));

// console.log(headTitle.matches("#head-title"));
// console.log(headTitle.matches(".head-title"));



// console.log(headTitle.contains(headTitle));
// console.log(headTitle.contains(headTitleLName));
// console.log(headTitleLName.contains(headTitle));
// console.log(headTitleLName.contains(headTitleLName));


//
//
//
//
//


let userInput = Number.parseInt(prompt("Enter any number!!"));
let macInput = Math.floor(Math.random() * 100); 

const theOutput = ((userInput, macInput)=>{
  return userInput * macInput
})

console.log("userInput" + " " + userInput)
console.log("macInput" + " " + macInput)

console.log(theOutput);
// document.write(theOutput)








