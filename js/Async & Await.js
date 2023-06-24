
async function sourav(){

    const sazzad = new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve("Age - 19")
          }, 1000)
    })

    const joy = new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve("Age - 22")
          }, 2000)
    })
    
    console.log("loading sazzad age")
    let bBhaiya = await sazzad
    console.log("got sazzad age-", sazzad)

    console.log("loading joy age")
    let cBhai = await joy
    console.log("got joy age-", joy)

    return [bBhaiya, cBhai]

}



const rue = async()=>{
    console.log("Im rue and im not waiting..")
};


// // both runs at the same time
//     const result = sourav();
//     const anotherResult = rue();
//     // console.log(result)
    
//     result.then((v)=>{
//         console.log(v)
//     })



const mainKey = async() =>{
    const result = await sourav();
    const anotherResult = await rue();
    console.log(result)
}

const baal = mainKey();
