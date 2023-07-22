

// !  first question answer

// const loadScript = (src)=>{
//       return new Promise((resolve, reject) => {
//             let script = document.createElement("script");
//             script.src = src;
//             document.head.appendChild(script)

//             script.onload = ()=> {
//                   resolve(src + " " + "---> script loaded!")
//             }
//             script.onerror = ()=> {
//                   reject(src + " " + "---> error while loading the script")
//             }
//       });
// }

// let result = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js")
// result.then((src)=>{
//       alert(src + " " + "--> load done")
// })



// const main = async() =>{
//       const result = await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js")
      
//       console.log(new Date().getMilliseconds())
//       console.log(result)
//       console.log(new Date().getMilliseconds())
// }

// main()













//  ! second question 
// const loadScript = async(src)=>{
//       return new Promise((resolve, reject)=>{
//             let script = document.createElement("script");
//                 script.src = src
//             document.head.appendChild(script)

//             script.onload = ()=>{
//                   resolve(src + " " + "---> load done!!")
//             }
            
//       });
// };

// const main = async()=>{
//       let result = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")
      
//       console.log(new Date().getMilliseconds())
//       console.log(result)
//       console.log(new Date().getMilliseconds())
// }

// main();

// console.log("hi") 


// ! third question 

// const srue = ()=>{
//       return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                   reject(new Error("it's rejected!"))
//             }, 3000)
//       })
// }

// const soru = async()=>{
//       let result = await srue();
//       console.log(result)
// }

// soru();


// problems 3 

// let toThird = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new Error("opps, rejected!"))
//         }, 3000)
//     })
// }

// let thenThird = async()=>{
//     let a = await toThird()
//     console.log(a)
// }

// thenThird();













