
// ? date: 23 jul 2023

// ! quenstion 4

// const pp1 = ()=>{
//   return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(10)
//         }, 1000)  
//   })
// }

// const pp2 = ()=>{
//   return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(20)
//         }, 1000)  
//   })
// }

// const pp3 = ()=>{
//   return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(30)
//         }, 940)  
//   })
// }

// const result = async()=>{
//       console.time("result")

//       // let al1 = await pp1()
//       // let al2 = await pp2()
//       // let al3 = await pp3()
//       // console.log(al1, al2, al3)

//       let al1 = pp1()
//       let al2 = pp2()
//       let al3 = pp3()
//       let promAll = await Promise.all([al1, al2, al3])
//       console.log(promAll)

//       console.timeEnd("result")
// }

// result()







// ! quenstion 3
// const thePhone = async()=>{
//   return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject(new Error("error after 3 seconds"))
//         }, 3000);
//   })
// }

// const result = async()=>{
//       try{
//         let a = await thePhone()
//         console.log(a)
//       }
//       catch(error){
//         console.log("error handled")
//       }
// }

// result()


// ! huddai 

// const authur = "Sourav";

// let returnPromiseOne = ()=>{
//       return new Promise((resolve, reject) => {
//           setTimeout(()=>{
//               resolve(20)
//           }, 3440)
//       })
// }
// let returnPromiseTwo = ()=>{
//       return new Promise((resolve, reject) => {
//           setTimeout(()=>{
//               resolve(10)
//           }, 2678)
//       })
// }
// let returnPromiseThree = ()=>{
//       return new Promise((resolve, reject) => {
//           setTimeout(()=>{
//               resolve(40)
//           }, 3577)
//       })
// }
// let returnPromiseFour = ()=>{
//       return new Promise((resolve, reject) => {
//           setTimeout(()=>{
//               resolve(120)
//           }, 2783)
//       })
// }


// const run = async()=>{
//       console.time("result")

//       let p1 = returnPromiseOne()
//       let p2 = returnPromiseTwo()
//       let p3 = returnPromiseThree()
//       let p4 = returnPromiseFour()

//       const result = await Promise.all([p1, p2, p3, p4])
//       console.log(result)
      
//       console.timeEnd("result")
// }

// run();



const her = ()=>{
        return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                      reject(new Error("I Love you!!"))
                }, 1000)
        })
}

her();

