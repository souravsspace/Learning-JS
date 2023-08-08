const listContainer = document.querySelector("[list-container]")
const inputBox = document.querySelector("[input-box")
const btn = document.querySelector("[btn]")


btn.addEventListener("click", todo)

function todo(){
      if(inputBox.value == ''){
            alert("write some first..")
      } else {
            let li = document.createElement("li")
            li.textContent = inputBox.value
            listContainer.appendChild(li)

            let span = document.createElement("span")
            span.innerHTML = "\u00d7"
            li.appendChild(span)
      }
      inputBox.value = "";
}

listContainer.addEventListener("click", (e)=>{
      if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked")
      } 
      else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
      }
})



// ! on enter press 

inputBox.addEventListener("keyup", (event)=>{
        event.preventDefault()
        if(event.keyCode === 13){
              btn.click()
        }
})


// document.addEventListener("keyup", function(event){
//         event.preventDefault()
//         if(event.keyCode === 13){
//               btn.click()
//               console.log("clicked")
//         }
// })


