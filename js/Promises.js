

// const promises = new Promise((resolve, reject)=>{
  
//   console.log("in the promise")
//   resolve(10)
// });

// console.log("One")

// setTimeout(()=>{
//   console.log("after 2 seconds - Two")
// }, 2000)

// console.log("Three")
// console.log(promises)




const promise = new Promise((toResolve, toReject)=>{
  console.log("promise one is pending!!")
    setTimeout(()=>{
      // console.log("Promise one is rejected")
      toReject(new Error("error coe 404!")) // if reject
    }, 2000);
});
const promiseTwo = new Promise((toResolve, toReject)=>{
  console.log("promise two is pending!!")
      setTimeout(()=>{
        // console.log("Promise two is fulfilled")
        toResolve(true); // if resolve
      }, 2000);
});

console.log(promise, promiseTwo)
// all the promises will run at the same time!! 


// .then() && .catch()
promise.catch((error)=>{
  // console.log(error)
  console.log("Some error happened in promise")
})

promiseTwo.then((value)=>{
  console.log(value)
})


// promise.then((value)=>{
//   console.log(value)
// })
// // hoy nai causes error











