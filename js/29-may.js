
let anNumber = [3, 5, 8, 2, 7, 9, 3, 6, 3, 0, 1]


// for loop
for(let i = 0; i < anNumber.length; i++){
  // console.log(i);
  // console.log(anNumber[i]);
};


// for in loop
for(let i in anNumber){
  // console.log(i)
  // console.log(anNumber[i]);
}

// for of loop
for(let i of anNumber){
  // console.log(i);
  // console.log(anNumber[i]);
}


// for each loop
anNumber.forEach((element, index)=> {
  // console.log(element * index);
});


// array form
let authur = "Sourav";
let arrayFrom = Array.from(authur);
// create string to array
// console.log(arrayFrom);


// input the number to the array that gives the user
// let getNumber = Number.parseInt(prompt());
// anNumber.push(getNumber);
// console.log(anNumber)



// guess the number from 1 to 5
let randomNumber = Number.parseInt(Math.random() * 5);
console.log(randomNumber)

let getNumberFromUser;
let score = 0;

while(getNumberFromUser !== randomNumber && score <= 5){
  getNumberFromUser = Number.parseInt(prompt("Guess the number from (0-5)"));

  if(getNumberFromUser === randomNumber){
    console.log("Congrats your score is" + " " + ( 5 - score ))
  }
}




