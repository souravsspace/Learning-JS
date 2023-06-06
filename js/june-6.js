
let main = document.getElementById("main");

main.className = "love rue pue muew";
// console.log(main.classList)

main.classList;


main.classList.add("lovee")
main.classList.add("meee")

main.classList.remove("pue")
main.classList.remove("muew")
// console.log(main.classList)



main.classList.remove("lovee", "meee")
// console.log(main.classList)

main.classList.add("loveTp", "lovePo")
// console.log(main.classList)




// true === false
// false === true
// main.classList.toggle("rue");
// console.log(main.classList)
// console.log(main.classList.toggle("rue"))
// console.log(main.classList.toggle("love"))
// console.log(main.classList.toggle("baal"))


// t = t 
// f = f
// console.log(main.classList.contains("rue"))
// console.log(main.classList.contains("bl"))



// setTimeUut

let timeOut = setTimeout(function(){
  alert("after 2s")
}, 2000)

// console.log(timeOut);
clearTimeout(timeOut);
// end the timeOut function



// let anBa = ((a, b)=>{
//   console.log("running", (a + b))
//   return (a * b) - (a + b)
// });

// setTimeout(anBa, 3000, 5, 10, 20);



// const sumAnything = (a, b, c)=>{
//   console.log("I'm running", (a + b +c))
//   return a + b
// }


// setTimeout(sumAnything, 2000, 5, 100, 10);



// setInterval
// it is a Infinity loop

let baal = setInterval(function(){
  alert("hey again, after 2000ms")
}, 2000);

clearInterval(baal);




// browser events








