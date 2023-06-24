
const promisel = new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve("first")
      }, 1600)
});

const promisell = new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve("second")
      }, 12000)
});

const promiselll = new Promise((resolve, reject)=>{
      setTimeout(()=>{
          // resolve("third")
          reject(new Error("error code 404"))
      }, 1500)
});


// promise methods 


// Promise.all([]) - creates a array after resolving all the promises
// but show error if any of the promise reject
// const promiseAll = Promise.all([promisel, promisell, promiselll]);


// Promise.allSettled([]) methods doesn't error if any on the promise rejects
// its just show the array and the resolve and reject
// const promiseAll = Promise.allSettled([promisel, promisell, promiselll]);

// Promise.race([]) = means fcfs and only 1 spot
// it will show any error that happen
// const promiseAll = Promise.race([promisel, promisell, promiselll]);


// Promise.any([]) = it will show the first resolved value
// it will ignore any kinda rejection
const promiseAll = Promise.any([promisel, promisell, promiselll]);



promiseAll.then((value)=>{
    console.log(value)
})




