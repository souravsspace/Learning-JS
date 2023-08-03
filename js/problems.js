
// display output by clicking btn
let input = document.querySelector(".input").value
let output = document.querySelector(".output")
let btn = document.querySelector(".btn")
let clear = document.querySelector(".clear")

      btn.addEventListener('click', ()=>{
            output.textContent = input
      })
      
      clear.addEventListener('click', ()=>{
            output.innerHTML = ''
            input = ''
      })

// const main = ()=> {
      

//       // search bar
//       let item = document.querySelectorAll(".item")
      
//       for(let i = 0; i < item.length; i++){
//             if(!item[i].innerHTML.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
//                   item[i].style.display = "none";
//             } else {
//                   item[i].style.display = "list-items"
//             }
//       }

// }

// main()










// matrinl 400mg
// imotil 100mg





