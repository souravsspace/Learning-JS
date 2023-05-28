
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
anNumber.forEach(element=> {
  console.log(element * element);
});

