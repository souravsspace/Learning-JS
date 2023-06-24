
const prom = new Promise((resolve, reject)=>{

      console.log("not resolved!")
      setTimeout(() => {
          resolve(1)
      }, 2000);  

});

// prom.then(()=>{
//   console.log("resolved")
// })

// prom.then(()=>{
//   console.log("chilling!")
// });


prom.then(()=>{
    console.log("resolved!")
    return new Promise((resolve, reject)=>{
          resolve("sourav")
    })
}).then((value)=>{
  console.log(value)
})





