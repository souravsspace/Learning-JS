// console.log(console);
// console.error("its an error!")
// console.warn("this is an warning!")

// console.time()
// let marks = {
//   "sourav" : 60,
//   "rue" : 98
// }
// console.timeLog()

// console.log(marks);
// console.table(marks);
// console.trace(marks)
// console.info(marks);
// console.count(marks)

// console.time(marks)
// console.timeEnd(marks)


// showing time using loop
let array = [1,2,4,6,7,8,2,4,7,4,1,3,5,7,8,9,0]

console.time('aa')
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // console.log(i)
}
console.timeEnd('aa')

// confirm 
alert("do you wanted to enter ?");
let getName = prompt("what is your name ?");
let blah = confirm(getName + " " + "is your name ?")

do{
  let getName = prompt("what is your name ?");
  let blah = confirm(getName + " " + "is your name ?")
} while(!blah)



