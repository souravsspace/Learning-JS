
// const promiseOne = new Promise((resolve, reject)=>{
//       console.log("first stage - done")
//       resolve(100);
// });

// promiseOne.then((value)=>{
//       console.warn("2nd one before return promise")
//       return new Promise((resolve, reject)=>{
//       // or let promiseTwo = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//           console.log("the value is" + " - " + value + " " + "after 2 seconds");
//           resolve("89")
//         }, 1000)
//       })
//       // or return promiseTwo
// }).then((value)=>{
//       console.log("3rd stage - done")
//       console.log(value)
//       return "Sourav"
// }).then((value)=>{
//   console.log(value)
// })




// loadScript function to load any script

const loadScript = (src)=>{
      return new Promise((resolve, reject)=>{
          let script = document.createElement("script");
          script.type = "text/javascript";
          script.src = src;
          document.body.appendChild(script);

          script.onload = ()=>{
            resolve(1)
          }

          script.onerror = ()=>{
            reject(0)
          }
      })
}


const lsVal = loadScript("ttps://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");



lsVal.then((value)=>{
      console.log(value)
}).catch((error)=>{
      console.error("getting error while loading this script")
})








