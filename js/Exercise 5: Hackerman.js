
let section = document.getElementById("section")

      let pp1, pp2, pp3, pp4;

      pp1 = document.createElement("p")
      pp2 = document.createElement("p")
      pp3 = document.createElement("p")
      pp4 = document.createElement("p")

      section.appendChild(pp1)
      section.appendChild(pp2)
      section.appendChild(pp3)
      section.appendChild(pp4)

let pf1 = () => {
      return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                  pp1.innerText = "Hacking rue's computer.."
            }, 890)
      })
}
let pf2 = () => {
      return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                  pp2.innerText = "Fetching data, wait a moment"
            }, 1000)
      })
}
let pf3 = () => {
      return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                  pp3.innerText = "Her fb password is.."
            }, 1500)
      })
}
let pf4 = () => {
      return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                  pp4.innerText = " pass: 'Ruuue0192223@#' "
            }, 3000)
      })
}

const main = async()=>{
      let pfp1 = pf1()
      let pfp2 = pf2()
      let pfp3 = pf3()
      let pfp4 = pf4()
}

main()





