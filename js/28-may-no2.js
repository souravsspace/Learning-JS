// arrays

let numberArray = [10,20,304,502,017,19371,8371.8,1073,17391,337];
let nameArray = ["sourav", 'joy', "akhi", "asa", "noyon"];
let mixedArray = [100,"sourav", 200, 183, 'joy', 27, "akhi"]

// console.log(
//   numberArray, nameArray, mixedArray
// )

numberArray[10] = 1000000000;
nameArray[1] = "riya";
mixedArray[3] = "ukil";

// console.log(
//   numberArray, nameArray, mixedArray
// )




// array methods 

let anArray = [100, "Apple", "Orange", 70, "Sourav"];

// number to sting
// let numberToString = anArray.toString();
// console.log(typeof numberToString) 


// let joinMethod = anArray.join("s");
// console.log(joinMethod);



// pop end and shift start -- remove element

// let popArray = anArray.pop();
// console.log(popArray)
// console.log(anArray.pop())
// pop delete or remove the last element

// let shiftArray = anArray.shift();
// console.log(shiftArray);
// console.log(shiftArray.shift());
// shift delete or remove the first element


// unshift start and push end -- add element
// let unshiftArray = anArray.unshift("Ukil")
// console.log(anArray); 

// let pushArray = anArray.push("Taka")
// console.log(anArray); 



// 
// 
// shift remove element form first and unshift add on first
// pop remove element form last and push add on last
// 
// 




let numbers = [40, 60, 50, 30];
let friends = ["Rue", "Ratul", "Emon", "Sakib"];

// delete array element
delete numbers[0];
// console.log(numbers.length, numbers);
// it doesn't effect on arrays length


// add two arrays togather
let mixedArrayTwo = numbers.concat(friends);
// console.log(mixedArrayTwo);


// sort array modify the orginal array
const anCompareFunction = (me, you)=>{
  return me - you;
}

let anNumberArray = numberArray.concat(numbers);
let sortArray = anNumberArray.sort();

// console.log(sortArray);


// reverse array
let reverseArray = anNumberArray.reverse();
console.log(reverseArray);



// splice and slice array both are same

let spliceArray = anNumberArray.splice(0, 2, 20000, 40000);
// where to start form zero
// where to end
// what to add ?

// console.log(spliceArray);
console.log(anNumberArray);

let sliceArray = anNumberArray.slice(2, 4, 0.01, 0.02)
console.log(sliceArray);
console.log(anNumberArray);



